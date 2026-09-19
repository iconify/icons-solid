import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrbt_q4og.css';
import '../../css/p/pt8e8sjhj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lrbt_q4og"/><path class="pt8e8sjhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:backspace-outline"} {...others} />);
}

export default Component;
