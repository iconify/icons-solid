import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/veuvy42df.css';
import '../../css/w/wbu9xubvi.css';
import '../../css/u/uqxypgxuv.css';
import '../../css/k/k15ksg7ur.css';
import '../../css/j/j636xlncp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="veuvy42df"/><path class="wbu9xubvi"/><path class="uqxypgxuv"/><path class="k15ksg7ur"/><path class="j636xlncp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-offshore-20-bold"} {...others} />);
}

export default Component;
