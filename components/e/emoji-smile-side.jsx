import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrwmq7ofm.css';
import '../../css/j/jb0hwxb_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qrwmq7ofm"/><path clip-rule="evenodd" class="jb0hwxb_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:emoji-smile-side"} {...others} />);
}

export default Component;
