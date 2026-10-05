import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/eevpdwb2u.css';
import '../../css/b/b44_26g_c.css';
import '../../css/f/f-n5-i5di.css';
import '../../css/h/huoq1ig0o.css';
import '../../css/l/liqd7r13i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="eevpdwb2u"/><path class="b44_26g_c"/><path class="f-n5-i5di"/><path class="huoq1ig0o"/><path class="liqd7r13i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:lock"} {...others} />);
}

export default Component;
