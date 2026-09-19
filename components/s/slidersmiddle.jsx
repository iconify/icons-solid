import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdh0-b5ob.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="zdh0-b5ob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:slidersmiddle"} {...others} />);
}

export default Component;
