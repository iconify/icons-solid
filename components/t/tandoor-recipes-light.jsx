import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq_6glbsc.css';
import '../../css/k/k2e-tqo9l.css';
import '../../css/y/ysphp0b9e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wq_6glbsc"/><path class="k2e-tqo9l"/><path class="ysphp0b9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tandoor-recipes-light"} {...others} />);
}

export default Component;
