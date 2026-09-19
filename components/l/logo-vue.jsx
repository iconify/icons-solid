import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tppfsxdkc.css';
import '../../css/d/dosysb90i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tppfsxdkc"/><path class="dosysb90i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:logo-vue"} {...others} />);
}

export default Component;
