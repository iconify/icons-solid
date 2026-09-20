import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dn8bx52jh.css';
import '../../css/h/hidu0kbkq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dn8bx52jh"/><path class="hidu0kbkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:sunrise-filled"} {...others} />);
}

export default Component;
