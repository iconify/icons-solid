import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/ph05t8b0o.css';
import '../../css/a/a88zcbw0e.css';
import '../../css/p/pulgrgb5l.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="ph05t8b0o"/><path class="a88zcbw0e"/><path class="pulgrgb5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:heart-hands"} {...others} />);
}

export default Component;
