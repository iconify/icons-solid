import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ui8-h5jfi.css';
import '../../css/f/fwjblvbkq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="ui8-h5jfi"/><path class="fwjblvbkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-connection-cable-split-cables-cable-split-device-computer-electronics-cords-cord-splitter"} {...others} />);
}

export default Component;
