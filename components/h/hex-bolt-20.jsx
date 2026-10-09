import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ef0ljnb5r.css';
import '../../css/y/yoszd_bap.css';
import '../../css/t/t_ft7pb_d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ef0ljnb5r"/><path class="yoszd_bap"/><path class="t_ft7pb_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hex-bolt-20"} {...others} />);
}

export default Component;
