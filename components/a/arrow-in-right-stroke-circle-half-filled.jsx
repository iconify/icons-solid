import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wl5wj4bmg.css';
import '../../css/j/jgmlxzbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wl5wj4bmg"/><path class="jgmlxzbvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-right-stroke-circle-half-filled"} {...others} />);
}

export default Component;
