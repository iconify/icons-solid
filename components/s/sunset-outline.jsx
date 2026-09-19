import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v_7nsv_zm.css';
import '../../css/h/h8am0cw8x.css';
import '../../css/j/jn6ooqbss.css';
import '../../css/x/x0bohhy_d.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="v_7nsv_zm"/><path class="h8am0cw8x"/><path class="jn6ooqbss"/><path class="x0bohhy_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sunset-outline"} {...others} />);
}

export default Component;
