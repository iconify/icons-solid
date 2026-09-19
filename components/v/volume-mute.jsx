import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avl6-q8xz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="avl6-q8xz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:volume-mute"} {...others} />);
}

export default Component;
