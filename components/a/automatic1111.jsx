import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mewn8jbsb.css';
import '../../css/l/l-3emlabv.css';
import '../../css/q/qekb1nb-r.css';
import '../../css/g/gxbioacqh.css';
import '../../css/c/cpiokdbke.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mewn8jbsb"/><path class="l-3emlabv"/><path class="qekb1nb-r"/><path class="gxbioacqh"/><path class="cpiokdbke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:automatic1111"} {...others} />);
}

export default Component;
