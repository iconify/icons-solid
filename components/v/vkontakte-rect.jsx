import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kh55srbkd.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="kh55srbkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:vkontakte-rect"} {...others} />);
}

export default Component;
