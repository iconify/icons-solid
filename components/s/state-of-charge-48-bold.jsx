import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj-lzbb4z.css';
import '../../css/s/symaru7nm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nj-lzbb4z"/><path class="symaru7nm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:state-of-charge-48-bold"} {...others} />);
}

export default Component;
