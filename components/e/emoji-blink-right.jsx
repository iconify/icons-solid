import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hau3ssbei.css';
import '../../css/b/b4wekebzy.css';
import '../../css/k/kja35acnc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hau3ssbei"/><path class="b4wekebzy"/><path class="kja35acnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:emoji-blink-right"} {...others} />);
}

export default Component;
