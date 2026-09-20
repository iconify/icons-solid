import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/eprdb-1bb.css';
import '../../css/f/f472do-je.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="eprdb-1bb"/><path class="f472do-je"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sliders-2-horizontal-sharp-two-tone"} {...others} />);
}

export default Component;
