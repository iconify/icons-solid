import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/llwq-7b3r.css';
import '../../css/u/uufe-4b8s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="llwq-7b3r"/><path class="uufe-4b8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:pause-future"} {...others} />);
}

export default Component;
