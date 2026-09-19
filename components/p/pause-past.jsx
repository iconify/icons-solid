import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/llwq-7b3r.css';
import '../../css/q/q585h1bqk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="llwq-7b3r"/><path class="q585h1bqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:pause-past"} {...others} />);
}

export default Component;
