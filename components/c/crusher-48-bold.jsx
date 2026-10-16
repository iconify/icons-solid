import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pd0ibrbxj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pd0ibrbxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crusher-48-bold"} {...others} />);
}

export default Component;
