import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7-d-rfeh.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="q7-d-rfeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:percent"} {...others} />);
}

export default Component;
