import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9bllgb-i.css';
import '../../css/s/sbfj-0zmi.css';
import '../../css/j/jh6xwxbpv.css';
import '../../css/w/wv69ft2op.css';
import '../../css/d/dp94l_bay.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l9bllgb-i"/><path class="sbfj-0zmi"/><path class="jh6xwxbpv"/><path class="wv69ft2op"/><path class="dp94l_bay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:scatola-magica-dark"} {...others} />);
}

export default Component;
