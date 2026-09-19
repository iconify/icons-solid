import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nc5q4acph.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="nc5q4acph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:raphael"} {...others} />);
}

export default Component;
