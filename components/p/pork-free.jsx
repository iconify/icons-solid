import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/s20xzl_jy.css';
import '../../css/m/mze2o9j1h.css';
import '../../css/b/bcjys6-ac.css';
import '../../css/m/m8eiitwkk.css';
import '../../css/j/j2m2o1ces.css';
import '../../css/m/mnodim4yx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="s20xzl_jy"/><path class="mze2o9j1h"/><path class="bcjys6-ac"/><path class="m8eiitwkk"/><path class="j2m2o1ces"/><path class="mnodim4yx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:pork-free"} {...others} />);
}

export default Component;
