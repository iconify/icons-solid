import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7byejq-o.css';
import '../../css/c/c3mb_pbac.css';
import '../../css/p/poj_abb7e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s7byejq-o"/><path class="c3mb_pbac"/><path class="poj_abb7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:laser-level-20-bold"} {...others} />);
}

export default Component;
