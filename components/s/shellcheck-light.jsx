import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iq-d4ab0e.css';
import '../../css/v/vxe7b0b2d.css';
import '../../css/t/twij58b_v.css';
import '../../css/l/l79kylebl.css';
import '../../css/u/uy0hx2qfx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="iq-d4ab0e"/><path class="vxe7b0b2d"/><path class="twij58b_v"/><path class="l79kylebl"/><path class="uy0hx2qfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:shellcheck-light"} {...others} />);
}

export default Component;
