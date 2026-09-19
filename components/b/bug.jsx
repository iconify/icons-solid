import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/v/vf1rklvkw.css';
import '../../css/c/csbv_qyju.css';
import '../../css/u/uob7s-b2w.css';
import '../../css/i/izm9e7b7m.css';
import '../../css/r/r9f88bbtj.css';
import '../../css/m/m7edjdbvp.css';
import '../../css/c/cwku3x7_s.css';
import '../../css/q/qarcg5ooz.css';
import '../../css/j/jqdr0e1zz.css';
import '../../css/z/z3nihib_d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="vf1rklvkw"/><path class="csbv_qyju"/><path class="uob7s-b2w"/><path class="izm9e7b7m"/><path class="r9f88bbtj"/><path class="m7edjdbvp"/><path class="cwku3x7_s"/><path class="qarcg5ooz"/><path class="jqdr0e1zz"/><path class="z3nihib_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bug"} {...others} />);
}

export default Component;
