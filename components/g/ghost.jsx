import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-tnjiruf.css';
import '../../css/g/gin4gdcnw.css';
import '../../css/g/gzbk6rbvb.css';
import '../../css/y/y53xrycce.css';
import '../../css/d/dm0q5bb9z.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/j/jqgwprb4g.css';
import '../../css/t/t-0l3dbue.css';
import '../../css/a/a2f722bty.css';
import '../../css/t/tf09pxb0l.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c-tnjiruf"/><ellipse class="gin4gdcnw"/><ellipse class="gzbk6rbvb"/><path class="y53xrycce"/><ellipse class="dm0q5bb9z"/><g class="jn8qy4bru"><ellipse class="jqgwprb4g"/><path class="t-0l3dbue"/><ellipse class="a2f722bty"/><ellipse class="tf09pxb0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ghost"} {...others} />);
}

export default Component;
