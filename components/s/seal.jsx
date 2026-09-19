import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/x/xeuvkacwg.css';
import '../../css/z/zacn5xvop.css';
import '../../css/g/g5-_zj_ar.css';
import '../../css/f/fj1iar32b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="xeuvkacwg"/><path class="zacn5xvop"/><path class="g5-_zj_ar"/><rect class="fj1iar32b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:seal"} {...others} />);
}

export default Component;
