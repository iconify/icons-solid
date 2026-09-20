import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jv6ya1rlm.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="jv6ya1rlm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:battery-empty-1-flat"} {...others} />);
}

export default Component;
