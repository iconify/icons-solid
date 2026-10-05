import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/bq0ccccbg.css';
import '../../css/h/h38u6tbvl.css';
import '../../css/j/jwn385b7c.css';
import '../../css/s/s30flpedt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="bq0ccccbg"/><path class="h38u6tbvl"/><path class="jwn385b7c"/><path class="s30flpedt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:frame"} {...others} />);
}

export default Component;
