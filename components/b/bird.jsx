import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/haib0ymyx.css';
import '../../css/x/xvy96vm6v.css';
import '../../css/o/oj-zv3btu.css';
import '../../css/o/oas-wrbbc.css';
import '../../css/j/jcyri5utd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="haib0ymyx"/><path class="xvy96vm6v"/><path class="oj-zv3btu"/><path class="oas-wrbbc"/><path class="jcyri5utd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bird"} {...others} />);
}

export default Component;
