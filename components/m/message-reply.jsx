import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/ncbm4olnp.css';
import '../../css/f/fc3w5rbsw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ncbm4olnp"/><path class="fc3w5rbsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:message-reply"} {...others} />);
}

export default Component;
