import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/v/v_u57kmwm.css';
import '../../css/w/wjq-an5qq.css';
import '../../css/r/riukhl86d.css';
import '../../css/e/ew2q4mw6b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="v_u57kmwm"/><path class="wjq-an5qq"/><circle transform="rotate(-180 11 31)" class="riukhl86d"/><path class="ew2q4mw6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cancer"} {...others} />);
}

export default Component;
