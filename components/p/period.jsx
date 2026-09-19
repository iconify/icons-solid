import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uz1ndg0wh.css';
import '../../css/j/j32tdeceo.css';
import '../../css/g/g8_zh9beg.css';
import '../../css/u/upj5apbhk.css';
import '../../css/k/kpe3g2b0m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="uz1ndg0wh"><path class="j32tdeceo"/><path class="g8_zh9beg"/><path class="upj5apbhk"/><path class="kpe3g2b0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:period"} {...others} />);
}

export default Component;
