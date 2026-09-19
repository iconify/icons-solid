import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cbprcirqx.css';
import '../../css/g/gian8go6d.css';
import '../../css/j/j5udpybsm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cbprcirqx"/><path class="gian8go6d"/><path class="j5udpybsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:social-distancing-do-not-close-2"} {...others} />);
}

export default Component;
