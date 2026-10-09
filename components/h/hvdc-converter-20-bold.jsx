import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqo5_yb0w.css';
import '../../css/k/kut36cotc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hqo5_yb0w"/><path class="kut36cotc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hvdc-converter-20-bold"} {...others} />);
}

export default Component;
