import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-wc5tbnn.css';
import '../../css/z/zj49idy7n.css';
import '../../css/p/psb8q1--l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l-wc5tbnn"/><path class="zj49idy7n"/><path class="psb8q1--l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:smiley-24"} {...others} />);
}

export default Component;
