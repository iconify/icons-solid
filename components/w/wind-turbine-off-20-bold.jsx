import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5fem0brp.css';
import '../../css/m/mu5t7mbov.css';
import '../../css/x/xyen0l77b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k5fem0brp"/><path class="mu5t7mbov"/><path class="xyen0l77b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-off-20-bold"} {...others} />);
}

export default Component;
