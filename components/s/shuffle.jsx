import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0_da6b0m.css';
import '../../css/z/zr3e3667p.css';
import '../../css/u/uw0f56fmz.css';
import '../../css/k/k0lfk7b3s.css';
import '../../css/l/l-ttvnh_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j0_da6b0m wm-shadow"/><path class="wm-k zr3e3667p"/><path class="uw0f56fmz wm-k"/><path class="k0lfk7b3s wm-a"/><path class="l-ttvnh_e wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:shuffle"} {...others} />);
}

export default Component;
