import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2o-9ho8x.css';
import '../../css/s/sl_3qvbcn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x2o-9ho8x"/><path class="sl_3qvbcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drilling-rig-48-bold"} {...others} />);
}

export default Component;
