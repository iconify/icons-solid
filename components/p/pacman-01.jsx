import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b38j5bbzc.css';
import '../../css/j/jrtk9-boo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="b38j5bbzc"/><path class="jrtk9-boo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pacman-01"} {...others} />);
}

export default Component;
