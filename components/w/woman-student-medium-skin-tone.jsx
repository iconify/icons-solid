import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5d6z6k4q.css';
import '../../css/w/w36xs4bmj.css';
import '../../css/v/vj6i9wbld.css';
import '../../css/k/kr0w9-x7g.css';
import '../../css/b/b59u9-3to.css';
import '../../css/d/dwmpcvqft.css';
import '../../css/g/g4bbsrbxx.css';
import '../../css/w/wm_50-bmx.css';
import '../../css/x/xfc260btm.css';
import '../../css/p/p49keiefj.css';
import '../../css/s/sf3c92bgp.css';
import '../../css/a/a0kj8nqpa.css';
import '../../css/j/j-c90d2bf.css';
import '../../css/g/gnps_ulef.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="y5d6z6k4q"/><path class="w36xs4bmj"/><path class="vj6i9wbld"/><path class="kr0w9-x7g"/><path class="b59u9-3to"/><path class="dwmpcvqft"/><path class="g4bbsrbxx"/><path class="wm_50-bmx"/><path class="xfc260btm"/><path class="p49keiefj"/><path class="sf3c92bgp"/><path class="a0kj8nqpa"/><path class="j-c90d2bf"/><path class="gnps_ulef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-student-medium-skin-tone"} {...others} />);
}

export default Component;
