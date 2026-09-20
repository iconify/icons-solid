import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr5ap7hjb.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="nr5ap7hjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:stopwatch-three-quarter-solid"} {...others} />);
}

export default Component;
