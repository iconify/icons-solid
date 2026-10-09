import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inuv3l36d.css';
import '../../css/z/zabxrlbru.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="inuv3l36d"/><path class="zabxrlbru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cake-48-bold"} {...others} />);
}

export default Component;
