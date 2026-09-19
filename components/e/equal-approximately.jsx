import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l15f58bue.css';
import '../../css/m/mxv0-rl9y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l15f58bue"/><path class="mxv0-rl9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:equal-approximately"} {...others} />);
}

export default Component;
