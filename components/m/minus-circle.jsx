import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upv2lacpf.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="upv2lacpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:minus-circle"} {...others} />);
}

export default Component;
