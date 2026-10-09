import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k25wbcbbf.css';
import '../../css/x/x2ixy0bli.css';
import '../../css/t/tgh03o3xt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k25wbcbbf"/><path class="x2ixy0bli"/><path class="tgh03o3xt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ozone-48"} {...others} />);
}

export default Component;
