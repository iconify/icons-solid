import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uszf_sena.css';
import '../../css/w/wzdcrsbth.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uszf_sena"/><path class="wzdcrsbth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mail-unread-20"} {...others} />);
}

export default Component;
