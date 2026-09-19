import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cpxmezbkl.css';
import '../../css/u/uz_9y4b7u.css';
import '../../css/b/b19zuobxy.css';
import '../../css/p/p_0bzob4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cpxmezbkl"/><path class="uz_9y4b7u"/><path class="b19zuobxy"/><path class="p_0bzob4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid19-virus-3"} {...others} />);
}

export default Component;
