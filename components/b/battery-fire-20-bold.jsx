import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ml5wo9g1f.css';
import '../../css/h/h3y6nxd1e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ml5wo9g1f"/><path class="h3y6nxd1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-fire-20-bold"} {...others} />);
}

export default Component;
