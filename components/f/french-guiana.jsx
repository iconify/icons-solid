import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6ysyvb8h.css';
import '../../css/w/wjt581t1z.css';
import '../../css/q/qfcqjabfa.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="r6ysyvb8h"/><path class="wjt581t1z"/><path class="qfcqjabfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:french-guiana"} {...others} />);
}

export default Component;
