import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqdy2-y3t.css';
import '../../css/f/fs7pu5ekr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dqdy2-y3t"/><path class="fs7pu5ekr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:srx"} {...others} />);
}

export default Component;
