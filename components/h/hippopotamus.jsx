import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovbjvnbio.css';
import '../../css/a/ap1lv70-j.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/v3xytbbit.css';
import '../../css/h/hf9nujbzq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ovbjvnbio"/><path class="ap1lv70-j"/><g class="jn8qy4bru"><path class="v3xytbbit"/><path class="hf9nujbzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hippopotamus"} {...others} />);
}

export default Component;
