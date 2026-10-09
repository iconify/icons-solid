import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5pljbc4p.css';
import '../../css/s/s5hz1qbpm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w5pljbc4p"/><path class="s5hz1qbpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:torch-20"} {...others} />);
}

export default Component;
