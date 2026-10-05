import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/x/xreczbeld.css';
import '../../css/s/s_o0tcy8i.css';
import '../../css/l/ladxk0btf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="xreczbeld"/><path class="s_o0tcy8i"/><path class="ladxk0btf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:log-out"} {...others} />);
}

export default Component;
