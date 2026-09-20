import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cf2-1wf3e.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="cf2-1wf3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:popcorn-solid"} {...others} />);
}

export default Component;
