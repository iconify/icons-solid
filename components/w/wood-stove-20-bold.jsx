import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h92e2tbsy.css';
import '../../css/i/i_nsi3ucm.css';
import '../../css/p/p4-i55byq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h92e2tbsy"/><path class="i_nsi3ucm"/><path class="p4-i55byq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wood-stove-20-bold"} {...others} />);
}

export default Component;
