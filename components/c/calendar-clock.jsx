import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o053b3bvz.css';
import '../../css/c/c06oizb4q.css';
import '../../css/m/m665vacsm.css';
import '../../css/k/km0xgebky.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o053b3bvz"/><path class="c06oizb4q"/><path class="m665vacsm"/><path class="km0xgebky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:calendar-clock"} {...others} />);
}

export default Component;
