import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/i/issgrdd1r.css';
import '../../css/q/qwt-kf13t.css';
import '../../css/c/cg_jlr6fg.css';
import '../../css/x/x6m4tlbsz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="issgrdd1r"/><rect class="qwt-kf13t"/><path class="cg_jlr6fg"/><path class="x6m4tlbsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:copy-link"} {...others} />);
}

export default Component;
