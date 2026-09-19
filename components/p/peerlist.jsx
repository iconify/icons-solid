import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q6ro8lsho.css';
import '../../css/w/wn-y3m-7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q6ro8lsho"/><path class="wn-y3m-7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:peerlist"} {...others} />);
}

export default Component;
