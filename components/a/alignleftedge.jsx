import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f35lyobeb.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="f35lyobeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:alignleftedge"} {...others} />);
}

export default Component;
