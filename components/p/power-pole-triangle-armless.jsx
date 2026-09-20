import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n836y-tcb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n836y-tcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:power-pole-triangle-armless"} {...others} />);
}

export default Component;
