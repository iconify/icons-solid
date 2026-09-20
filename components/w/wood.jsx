import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5et9lxjq.css';
import '../../css/i/i8m-zjguk.css';
import '../../css/i/irczjwbis.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/g/gx26emb1z.css';
import '../../css/z/zg9uhs63y.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="m5et9lxjq"/><path class="i8m-zjguk"/><path class="irczjwbis"/><g class="jn8qy4bru"><path class="gx26emb1z"/><path class="zg9uhs63y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:wood"} {...others} />);
}

export default Component;
