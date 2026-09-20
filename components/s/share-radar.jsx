import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/slrtq_bwu.css';
import '../../css/y/yvo8g2ena.css';
import '../../css/i/i_mt8hb3h.css';
import '../../css/y/ytyk_-blx.css';
import '../../css/x/xfv2nibzq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="slrtq_bwu"/><path class="yvo8g2ena"/><path class="i_mt8hb3h"/><path class="ytyk_-blx"/><path class="xfv2nibzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:share-radar"} {...others} />);
}

export default Component;
