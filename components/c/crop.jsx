import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_4rfcbog.css';
import '../../css/w/wdns6kbtq.css';
import '../../css/v/vzal-7s5b.css';
import '../../css/i/iyy2_-bjv.css';
import '../../css/v/vk5be2bjs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow y_4rfcbog"/><path class="wdns6kbtq wm-k"/><path class="vzal-7s5b wm-k"/><path class="iyy2_-bjv wm-a"/><path class="vk5be2bjs wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:crop"} {...others} />);
}

export default Component;
