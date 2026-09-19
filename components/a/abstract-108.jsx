import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ao0ucxbbd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ao0ucxbbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:abstract-108"} {...others} />);
}

export default Component;
