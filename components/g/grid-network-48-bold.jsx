import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sz0_wjbxg.css';
import '../../css/a/aeebr_bnk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sz0_wjbxg"/><path class="aeebr_bnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-network-48-bold"} {...others} />);
}

export default Component;
