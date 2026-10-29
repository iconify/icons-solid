import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0d4whrcv.css';
import '../../css/a/aavp96b6g.css';
import '../../css/a/a2hcidcxj.css';
import '../../css/w/wj91yjiao.css';
import '../../css/f/ffiah-nka.css';
import '../../css/k/kb4senbdp.css';
import '../../css/j/j_qdgeb1g.css';
import '../../css/x/xon09fj8g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j0d4whrcv wm-shadow"/><path class="aavp96b6g wm-shadow"/><path class="a2hcidcxj"/><path class="wj91yjiao"/><path class="ffiah-nka"/><path class="kb4senbdp"/><path class="j_qdgeb1g"/><path class="xon09fj8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:map-pin-check"} {...others} />);
}

export default Component;
