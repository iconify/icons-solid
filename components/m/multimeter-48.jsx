import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/batmvgb8l.css';
import '../../css/m/mud9nbkvp.css';
import '../../css/n/nv6m4c8xt.css';
import '../../css/z/zczeh0h7o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="batmvgb8l"/><path class="mud9nbkvp"/><path class="nv6m4c8xt"/><path class="zczeh0h7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:multimeter-48"} {...others} />);
}

export default Component;
