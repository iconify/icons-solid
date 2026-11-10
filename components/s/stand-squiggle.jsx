import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6vld7b9d.css';
import '../../css/k/k78zf2buj.css';
import '../../css/v/vasfixxhb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x6vld7b9d"/><path class="k78zf2buj"/><path class="vasfixxhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stand-squiggle"} {...others} />);
}

export default Component;
