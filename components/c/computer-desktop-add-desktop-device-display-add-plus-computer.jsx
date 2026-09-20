import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c35mn0b7c.css';
import '../../css/y/y78o-yb3a.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="c35mn0b7c"/><path class="y78o-yb3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-desktop-add-desktop-device-display-add-plus-computer"} {...others} />);
}

export default Component;
