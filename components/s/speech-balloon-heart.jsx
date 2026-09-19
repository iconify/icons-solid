import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbtcz_bmm.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="kbtcz_bmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:speech-balloon-heart"} {...others} />);
}

export default Component;
