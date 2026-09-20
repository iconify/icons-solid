import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ave6_-bix.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ave6_-bix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:button-pause-circle-solid"} {...others} />);
}

export default Component;
