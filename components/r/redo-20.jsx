import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/op02w5bbu.css';
import '../../css/s/s6hyw202b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="op02w5bbu"/><path class="s6hyw202b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:redo-20"} {...others} />);
}

export default Component;
