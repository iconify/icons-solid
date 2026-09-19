import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/z/zxk766oyl.css';
import '../../css/b/bxrtjkw0l.css';
import '../../css/e/ewioykboo.css';
import '../../css/c/cq-wmosso.css';
import '../../css/d/dqdvanavr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="zxk766oyl"/><path class="bxrtjkw0l"/><path class="ewioykboo"/><path class="cq-wmosso"/><path class="dqdvanavr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pay-code"} {...others} />);
}

export default Component;
