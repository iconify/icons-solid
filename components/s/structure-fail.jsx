import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d-83kj-6q.css';
import '../../css/t/ts8aqxboo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="d-83kj-6q"/><path class="ts8aqxboo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:structure-fail"} {...others} />);
}

export default Component;
