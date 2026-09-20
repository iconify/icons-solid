import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1bue927j.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="c1bue927j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:happy-face-in-circle"} {...others} />);
}

export default Component;
