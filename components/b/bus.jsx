import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/w/wgtbfl_qn.css';
import '../../css/l/l-hm_u4_z.css';
import '../../css/g/ge1s5zbri.css';
import '../../css/f/fmvop5b1h.css';
import '../../css/u/ucivptb_q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="wgtbfl_qn"/><path class="l-hm_u4_z"/><path class="ge1s5zbri"/><path class="fmvop5b1h"/><path class="ucivptb_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bus"} {...others} />);
}

export default Component;
