import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krn-s63up.css';
import '../../css/s/smbx2_k0z.css';
import '../../css/v/vto-p9r5y.css';
import '../../css/b/be-8-kdwh.css';
import '../../css/z/zs83a7b3p.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="krn-s63up"/><path class="smbx2_k0z"/><circle class="vto-p9r5y"/><circle class="be-8-kdwh"/><path class="zs83a7b3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:hare"} {...others} />);
}

export default Component;
