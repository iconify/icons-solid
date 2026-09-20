import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/myfkyn7da.css';
import '../../css/n/ncbm4olnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="myfkyn7da"/><path class="ncbm4olnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:message-check"} {...others} />);
}

export default Component;
