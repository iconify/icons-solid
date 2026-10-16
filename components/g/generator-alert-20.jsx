import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le62_1bgw.css';
import '../../css/w/wikar0bxx.css';
import '../../css/n/nq5_p_bzp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="le62_1bgw"/><path class="wikar0bxx"/><path class="nq5_p_bzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:generator-alert-20"} {...others} />);
}

export default Component;
