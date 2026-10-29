import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m860o1uuj.css';
import '../../css/l/l_jvykb1r.css';
import '../../css/f/fi0w54bwt.css';
import '../../css/e/e_-z0dxbg.css';
import '../../css/u/umcktmbsh.css';
import '../../css/q/qdseiybfr.css';
import '../../css/y/y6864zbhh.css';
import '../../css/z/zliqd609m.css';
import '../../css/v/vlr_rtbbk.css';
import '../../css/z/zuu0nqb1n.css';
import '../../css/j/jog1qqbgg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m860o1uuj wm-shadow"/><path class="l_jvykb1r wm-a"/><path class="fi0w54bwt wm-a"/><path class="e_-z0dxbg wm-a"/><path class="umcktmbsh wm-a"/><path class="qdseiybfr wm-k"/><path class="wm-k y6864zbhh"/><path class="wm-k zliqd609m"/><path class="vlr_rtbbk wm-k"/><path class="wm-shine zuu0nqb1n"/><path class="jog1qqbgg wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:pen-tool"} {...others} />);
}

export default Component;
