import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1y5wubyd.css';
import '../../css/k/kko08wbig.css';
import '../../css/l/ll6z6iofx.css';
import '../../css/b/b7-ki5bko.css';
import '../../css/z/zwsl3sb3u.css';
import '../../css/z/z2vj6abwk.css';
import '../../css/z/znjy9cbsu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t1y5wubyd"/><path class="kko08wbig"/><path class="ll6z6iofx"/><path class="b7-ki5bko"/><path class="zwsl3sb3u"/><path class="z2vj6abwk"/><path class="znjy9cbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tableau"} {...others} />);
}

export default Component;
