import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/u/uhjjzebis.css';
import '../../css/h/hhixwm_vs.css';
import '../../css/v/v4i34xyli.css';
import '../../css/z/zh_t9eo9c.css';
import '../../css/v/vhjkrrbfp.css';
import '../../css/u/ug9ofiqpt.css';
import '../../css/b/bqi9gcnyy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="uhjjzebis"/><path class="hhixwm_vs"/><path class="v4i34xyli"/><path class="zh_t9eo9c"/><path class="vhjkrrbfp"/><path class="ug9ofiqpt"/><path class="bqi9gcnyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mac-finder"} {...others} />);
}

export default Component;
