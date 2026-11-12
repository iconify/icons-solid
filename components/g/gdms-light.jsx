import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rc_cn3gik.css';
import '../../css/f/fd3h4yb_q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rc_cn3gik"/><path class="fd3h4yb_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gdms-light"} {...others} />);
}

export default Component;
