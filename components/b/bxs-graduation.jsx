import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtvcw1bvs.css';
import '../../css/w/w8cjmh64r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jtvcw1bvs"/><path class="w8cjmh64r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-graduation"} {...others} />);
}

export default Component;
