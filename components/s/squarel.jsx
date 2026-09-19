import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/on18ujy8z.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="on18ujy8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:squarel"} {...others} />);
}

export default Component;
