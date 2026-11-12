import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qa68hvfck.css';
import '../../css/x/xqp0ub7in.css';
import '../../css/t/ttzld_7nf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qa68hvfck"/><path class="xqp0ub7in"/><path class="ttzld_7nf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dbackup-dark"} {...others} />);
}

export default Component;
