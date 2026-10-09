import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgv66ypwa.css';
import '../../css/t/tzy1k5bvx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xgv66ypwa"/><path class="tzy1k5bvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:volume-x-48-bold"} {...others} />);
}

export default Component;
