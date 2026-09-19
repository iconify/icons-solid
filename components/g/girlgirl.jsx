import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfbqa4tcc.css';
import '../../css/r/rbd0z1cgw.css';
import '../../css/i/itdnijbga.css';
import '../../css/g/g27vocerp.css';
import '../../css/v/v_fbh1hwx.css';
import '../../css/t/tkiykibwo.css';
import '../../css/w/wy74g6f0y.css';
import '../../css/t/t83ozp4wp.css';
import '../../css/r/r4za20bcf.css';
import '../../css/e/e0fk-cp3w.css';
import '../../css/e/exa94gb7l.css';
import '../../css/g/g7n_mxblr.css';
import '../../css/g/gddblubig.css';
import '../../css/o/o25hr_bmr.css';
import '../../css/v/v_u7_1b7k.css';
import '../../css/k/k10eezzdb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jfbqa4tcc"/><path class="rbd0z1cgw"/><path class="itdnijbga"/><path class="g27vocerp"/><path class="v_fbh1hwx"/><path class="tkiykibwo"/><path class="wy74g6f0y"/><path class="t83ozp4wp"/><path class="r4za20bcf"/><path class="e0fk-cp3w"/><path class="exa94gb7l"/><path class="g7n_mxblr"/><path class="gddblubig"/><path class="o25hr_bmr"/><path class="v_u7_1b7k"/><path class="k10eezzdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:girlgirl"} {...others} />);
}

export default Component;
