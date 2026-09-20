import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qh1fr4b9c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qh1fr4b9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:folder-open"} {...others} />);
}

export default Component;
