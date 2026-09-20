import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t09_lb0hx.css';
import '../../css/s/s258ekblf.css';
import '../../css/x/xm5q3eb_h.css';
import '../../css/s/szxp8d7ki.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t09_lb0hx"/><path class="s258ekblf"/><path class="xm5q3eb_h"/><path class="szxp8d7ki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:readeck"} {...others} />);
}

export default Component;
