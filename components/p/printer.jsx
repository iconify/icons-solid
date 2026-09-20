import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nbwa9ublz.css';
import '../../css/k/kxpox3n1d.css';
import '../../css/r/r-xvhpbej.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="nbwa9ublz"/><path class="kxpox3n1d"/><path class="r-xvhpbej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:printer"} {...others} />);
}

export default Component;
