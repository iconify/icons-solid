import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q71v1jb4q.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="q71v1jb4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:lion-and-exclamation-point"} {...others} />);
}

export default Component;
