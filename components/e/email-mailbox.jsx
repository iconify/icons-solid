import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy9o_obok.css';
import '../../css/q/qb8d7ybqw.css';
import '../../css/a/a59as3_kd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oy9o_obok"/><path class="qb8d7ybqw"/><path class="a59as3_kd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:email-mailbox"} {...others} />);
}

export default Component;
