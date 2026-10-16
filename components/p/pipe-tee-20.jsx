import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/supgx2bpn.css';
import '../../css/s/ss4fa8bou.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="supgx2bpn"/><path class="ss4fa8bou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-tee-20"} {...others} />);
}

export default Component;
