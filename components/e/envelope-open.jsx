import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m__s6x_rn.css';
import '../../css/e/e_pm_3zoi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="m__s6x_rn"/><path class="e_pm_3zoi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:envelope-open"} {...others} />);
}

export default Component;
