import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/ma7sgrb7k.css';
import '../../css/x/xrq2kxblp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ma7sgrb7k"/><path class="xrq2kxblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:charging-power-level"} {...others} />);
}

export default Component;
