import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l16p_0smn.css';
import '../../css/i/ilq4zvino.css';
import '../../css/o/otz3qz_jq.css';
import '../../css/l/l2qt7co3j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l16p_0smn"/><path class="ilq4zvino"/><path class="otz3qz_jq"/><path class="l2qt7co3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:home-wifi-angle-bold-duotone"} {...others} />);
}

export default Component;
