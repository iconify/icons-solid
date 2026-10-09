import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/q/q4-qaubxc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="q4-qaubxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dairy-free-20"} {...others} />);
}

export default Component;
