import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz6pfccwf.css';
import '../../css/k/kwpuslbzu.css';
import '../../css/d/d4ypccbfw.css';
import '../../css/j/j-7gwtb9y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iz6pfccwf"/><path class="kwpuslbzu"/><path class="d4ypccbfw"/><path class="j-7gwtb9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:soil-carbon-20-bold"} {...others} />);
}

export default Component;
