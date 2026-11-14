import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cjuia-bgq.css';
import '../../css/w/wi-0c7-en.css';
import '../../css/b/b3zeicc3h.css';
import '../../css/p/px8h8ibau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cjuia-bgq"/><path class="wi-0c7-en"/><path class="b3zeicc3h"/><path class="px8h8ibau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-brain-03"} {...others} />);
}

export default Component;
