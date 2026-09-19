import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/plvaz3bau.css';
import '../../css/b/bslra6ble.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="plvaz3bau"/><path class="bslra6ble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:note-medical"} {...others} />);
}

export default Component;
