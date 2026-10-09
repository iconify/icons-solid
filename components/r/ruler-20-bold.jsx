import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwee6s4xt.css';
import '../../css/g/grkcr9m5y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vwee6s4xt"/><path class="grkcr9m5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ruler-20-bold"} {...others} />);
}

export default Component;
