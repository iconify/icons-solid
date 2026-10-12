import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kimja1bft.css';
import '../../css/h/hkr50px7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kimja1bft"/><path class="hkr50px7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:land-plot"} {...others} />);
}

export default Component;
