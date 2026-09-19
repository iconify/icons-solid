import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yy1j1mu6r.css';
import '../../css/q/qmrmd-8xh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yy1j1mu6r"/><path class="qmrmd-8xh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:home"} {...others} />);
}

export default Component;
