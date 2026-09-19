import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdh7j2b7z.css';
import '../../css/d/dnjsr0bxc.css';
import '../../css/w/w8ocslbwa.css';
import '../../css/q/qrgk7fb0p.css';
import '../../css/j/j4ih77blr.css';
import '../../css/y/yfy842ant.css';
import '../../css/u/u7ogdgb4g.css';
import '../../css/f/fofyqvbpe.css';
import '../../css/y/yrjvm7veo.css';
import '../../css/e/e5e0tbb_l.css';

const viewBox = {"width":100,"height":91};
const content = `<path class="vdh7j2b7z"/><path class="dnjsr0bxc"/><path class="w8ocslbwa"/><path class="qrgk7fb0p"/><path class="j4ih77blr"/><path class="yfy842ant"/><path class="u7ogdgb4g"/><path class="fofyqvbpe"/><path class="yrjvm7veo"/><path class="e5e0tbb_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:chair"} {...others} />);
}

export default Component;
