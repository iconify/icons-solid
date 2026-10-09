import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-akp5bab.css';
import '../../css/c/cl0ksvb4b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s-akp5bab"/><path class="cl0ksvb4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sand-battery-20-bold"} {...others} />);
}

export default Component;
