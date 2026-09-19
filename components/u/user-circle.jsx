import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/snm_llb0d.css';
import '../../css/k/k3tk-pelt.css';
import '../../css/v/v3nqtefag.css';
import '../../css/d/dddk1uvez.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="snm_llb0d"/><path class="k3tk-pelt"/><path clip-rule="evenodd" class="v3nqtefag"/><path class="dddk1uvez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:user-circle"} {...others} />);
}

export default Component;
