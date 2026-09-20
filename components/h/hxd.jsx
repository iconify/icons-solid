import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvfgwur0k.css';
import '../../css/j/ji7wcabrd.css';
import '../../css/z/zqn5jqduv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rvfgwur0k"/><path class="ji7wcabrd"/><path class="zqn5jqduv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hxd"} {...others} />);
}

export default Component;
