import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6yn1hbsr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q6yn1hbsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-webmethods-developer-portal"} {...others} />);
}

export default Component;
