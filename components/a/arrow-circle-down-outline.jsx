import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jt4kxjb1o.css';
import '../../css/w/wckr9kb1z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jt4kxjb1o"/><path class="wckr9kb1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:arrow-circle-down-outline"} {...others} />);
}

export default Component;
