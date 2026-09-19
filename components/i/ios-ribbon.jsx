import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-s_g5rvf.css';
import '../../css/s/sfb9xk9fs.css';
import '../../css/o/ob232qb0n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q-s_g5rvf"/><path class="sfb9xk9fs"/><path class="ob232qb0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-ribbon"} {...others} />);
}

export default Component;
