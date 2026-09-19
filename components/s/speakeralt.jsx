import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h65q5vbpz.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="h65q5vbpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:speakeralt"} {...others} />);
}

export default Component;
