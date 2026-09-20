import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mjq9ib_1y.css';
import '../../css/j/j122t5b1j.css';
import '../../css/m/myzrsybmq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mjq9ib_1y"/><path class="j122t5b1j"/><path class="myzrsybmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sort-list-alt-light"} {...others} />);
}

export default Component;
