import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/umo1awt0n.css';
import '../../css/u/u5gjpt88l.css';
import '../../css/r/rhcamgb4e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="umo1awt0n"/><circle class="u5gjpt88l"/><path class="rhcamgb4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-places-cart-cart-travel-local-buckboard-retro"} {...others} />);
}

export default Component;
