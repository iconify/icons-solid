import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z8j6ccc5g.css';
import '../../css/t/tnz_2pl9f.css';
import '../../css/x/x3rxkep0w.css';
import '../../css/h/ht6mdpbgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z8j6ccc5g"/><path class="tnz_2pl9f"/><path class="x3rxkep0w"/><path class="ht6mdpbgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-hot-linear"} {...others} />);
}

export default Component;
