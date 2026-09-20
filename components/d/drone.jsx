import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/crsqxebvn.css';
import '../../css/m/mmi39bbnw.css';
import '../../css/a/a8qpkhsmr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="crsqxebvn"/><path class="mmi39bbnw"/><path class="a8qpkhsmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:drone"} {...others} />);
}

export default Component;
