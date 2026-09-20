import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iq661j3rq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iq661j3rq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:terminal-box-line"} {...others} />);
}

export default Component;
