import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_onqt-wt.css';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/xitqykrlb.css';
import '../../css/r/rmypnryiu.css';
import '../../css/j/ji9ii3kvv.css';
import '../../css/h/ha-hviguu.css';
import '../../css/f/fi4r_-8af.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVGR1J2Bwko" class="b_onqt-wt"/></defs><g class="in9d5ac6n"><path class="xitqykrlb"/><path class="rmypnryiu"/><use href="#SVGR1J2Bwko"/><use href="#SVGR1J2Bwko"/><path class="ji9ii3kvv"/><path class="ha-hviguu"/><path class="fi4r_-8af"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:park"} {...others} />);
}

export default Component;
