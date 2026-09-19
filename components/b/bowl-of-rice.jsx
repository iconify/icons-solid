import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpk0dxbrm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rpk0dxbrm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:bowl-of-rice"} {...others} />);
}

export default Component;
