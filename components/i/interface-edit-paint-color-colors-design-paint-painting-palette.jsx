import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y-zgfhx6a.css';
import '../../css/a/ax6wa8b5f.css';
import '../../css/s/s7w7_126a.css';
import '../../css/d/d8jw7fb1v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="y-zgfhx6a"/><circle class="ax6wa8b5f"/><circle class="s7w7_126a"/><path class="d8jw7fb1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-paint-color-colors-design-paint-painting-palette"} {...others} />);
}

export default Component;
