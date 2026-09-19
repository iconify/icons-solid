import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fms-4tbig.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="fms-4tbig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:keyboardalt"} {...others} />);
}

export default Component;
