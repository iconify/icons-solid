import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-p_6nalg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a-p_6nalg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:star-medal"} {...others} />);
}

export default Component;
