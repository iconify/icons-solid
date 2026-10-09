import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0np8zw3o.css';
import '../../css/f/f7tmn3bfb.css';
import '../../css/q/qohosibzi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h0np8zw3o"/><path class="f7tmn3bfb"/><path class="qohosibzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:expand-20"} {...others} />);
}

export default Component;
