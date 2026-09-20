import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt71oo3zh.css';
import '../../css/w/w6v346ini.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/r/r3zdxib9o.css';
import '../../css/v/v7331qb3y.css';
import '../../css/n/nejkym4sf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rt71oo3zh"/><path class="w6v346ini"/><g class="jn8qy4bru"><path class="r3zdxib9o"/><path class="v7331qb3y"/><path class="nejkym4sf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ox"} {...others} />);
}

export default Component;
