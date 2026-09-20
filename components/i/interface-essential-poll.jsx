import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/olc3e_b1f.css';
import '../../css/x/xdvj_qs2e.css';
import '../../css/l/lv0o3p4mv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="olc3e_b1f"/><path class="xdvj_qs2e"/><path class="lv0o3p4mv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-poll"} {...others} />);
}

export default Component;
