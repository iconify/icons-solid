import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e1t_zcbec.css';
import '../../css/q/qe8f45-ff.css';
import '../../css/z/z8dp_68if.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e1t_zcbec"/><path class="qe8f45-ff"/><path class="z8dp_68if"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mars-stroke"} {...others} />);
}

export default Component;
