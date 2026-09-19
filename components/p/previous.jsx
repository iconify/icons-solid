import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j58uu9b3y.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="j58uu9b3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:previous"} {...others} />);
}

export default Component;
