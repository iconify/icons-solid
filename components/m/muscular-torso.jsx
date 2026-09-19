import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebc7guqzo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ebc7guqzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:muscular-torso"} {...others} />);
}

export default Component;
