import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqx77rc_z.css';
import '../../css/z/zw6txi54r.css';
import '../../css/s/s_br_rypg.css';
import '../../css/u/uinh09d-z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nqx77rc_z"/><path class="zw6txi54r"/><path class="s_br_rypg"/><path class="uinh09d-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:church-20"} {...others} />);
}

export default Component;
