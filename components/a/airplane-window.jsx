import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/d/dzoas_ivg.css';
import '../../css/g/gewuo5oti.css';
import '../../css/q/q19w50o6a.css';
import '../../css/l/lvs728kzu.css';
import '../../css/s/saay-290m.css';
import '../../css/x/x_i8f9uxe.css';
import '../../css/v/vv3_6lryf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="dzoas_ivg"/><path class="gewuo5oti"/><path class="q19w50o6a"/><path class="lvs728kzu"/><path class="saay-290m"/><path class="x_i8f9uxe"/><path class="vv3_6lryf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:airplane-window"} {...others} />);
}

export default Component;
