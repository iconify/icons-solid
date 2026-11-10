import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/np9_18bok.css';
import '../../css/d/drnhc8b1o.css';
import '../../css/n/n3u59gxti.css';
import '../../css/d/dynt_e_ch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="np9_18bok"/><path class="drnhc8b1o"/><path class="n3u59gxti"/><path class="dynt_e_ch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:shield"} {...others} />);
}

export default Component;
