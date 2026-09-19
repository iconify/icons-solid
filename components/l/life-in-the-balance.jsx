import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ko-4xac8i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ko-4xac8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:life-in-the-balance"} {...others} />);
}

export default Component;
