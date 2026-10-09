import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqeig8tmv.css';
import '../../css/x/xwmv3qb7e.css';
import '../../css/t/t3xeeshqm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hqeig8tmv"/><path class="xwmv3qb7e"/><path class="t3xeeshqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:palm-tree-48"} {...others} />);
}

export default Component;
