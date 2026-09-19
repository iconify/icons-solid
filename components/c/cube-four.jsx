import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/z/zh66mescg.css';
import '../../css/w/wu2dblovj.css';
import '../../css/h/hp8au82iz.css';
import '../../css/z/zivo2sb4g.css';
import '../../css/s/sxec4i8nw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="zh66mescg"/><path class="wu2dblovj"/><path class="hp8au82iz"/><path class="zivo2sb4g"/><path class="sxec4i8nw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cube-four"} {...others} />);
}

export default Component;
