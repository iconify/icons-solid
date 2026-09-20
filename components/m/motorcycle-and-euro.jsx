import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/el96rjbky.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="el96rjbky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:motorcycle-and-euro"} {...others} />);
}

export default Component;
