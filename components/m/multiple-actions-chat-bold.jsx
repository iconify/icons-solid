import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0yqaacfm.css';
import '../../css/g/g4ri23blu.css';
import '../../css/h/hovqi_wid.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y0yqaacfm"/><path class="g4ri23blu"/><path class="hovqi_wid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:multiple-actions-chat-bold"} {...others} />);
}

export default Component;
