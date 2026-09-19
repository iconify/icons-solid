import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nmd_ebe6d.css';
import '../../css/f/f01wpx3bc.css';
import '../../css/k/k5sacmbeu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="nmd_ebe6d"/><path class="f01wpx3bc"/><rect class="k5sacmbeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:wallet"} {...others} />);
}

export default Component;
