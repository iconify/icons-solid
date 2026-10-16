import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itjermisk.css';
import '../../css/a/a7tgj93ph.css';
import '../../css/i/ioz9rd6gt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="itjermisk"/><path class="a7tgj93ph"/><path class="ioz9rd6gt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-compressor-20-bold"} {...others} />);
}

export default Component;
