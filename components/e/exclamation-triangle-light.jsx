import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv8-yz4el.css';
import '../../css/j/jvw8zwcpr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hv8-yz4el"/><path clip-rule="evenodd" class="jvw8zwcpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:exclamation-triangle-light"} {...others} />);
}

export default Component;
