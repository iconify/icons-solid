import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdbcpwbxd.css';
import '../../css/z/zso3njb9g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qdbcpwbxd"/><path class="zso3njb9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-bolt-20"} {...others} />);
}

export default Component;
