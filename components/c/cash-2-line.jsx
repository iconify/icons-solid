import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc7lxnfds.css';
import '../../css/u/u-06obvoh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jc7lxnfds"/><path class="u-06obvoh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cash-2-line"} {...others} />);
}

export default Component;
