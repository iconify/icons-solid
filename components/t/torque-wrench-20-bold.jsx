import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk1wv8bbc.css';
import '../../css/g/ggz3dxbtl.css';
import '../../css/o/ok4v_yuxa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mk1wv8bbc"/><path class="ggz3dxbtl"/><path class="ok4v_yuxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:torque-wrench-20-bold"} {...others} />);
}

export default Component;
