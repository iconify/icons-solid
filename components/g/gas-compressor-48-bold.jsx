import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzxt0mswz.css';
import '../../css/h/htyx_ybsn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hzxt0mswz"/><path class="htyx_ybsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-compressor-48-bold"} {...others} />);
}

export default Component;
