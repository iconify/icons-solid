import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/walr4d8bz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="walr4d8bz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pixel-burger-on-bun-with-seeds"} {...others} />);
}

export default Component;
