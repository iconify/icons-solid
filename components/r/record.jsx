import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/i/ilsyr1bsh.css';
import '../../css/w/w98viukhh.css';
import '../../css/u/u1p5lybcx.css';
import '../../css/q/q3xq_00jy.css';
import '../../css/b/bu85uobwx.css';
import '../../css/f/fa3gi85sj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="ilsyr1bsh"/><path class="w98viukhh"/><path class="u1p5lybcx"/><path class="q3xq_00jy"/><path class="bu85uobwx"/><path class="fa3gi85sj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:record"} {...others} />);
}

export default Component;
