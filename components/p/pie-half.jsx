import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjp-q-2bl.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="wjp-q-2bl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:pie-half"} {...others} />);
}

export default Component;
