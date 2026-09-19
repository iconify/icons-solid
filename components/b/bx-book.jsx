import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmvtqzacp.css';
import '../../css/y/yox3j-b4i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qmvtqzacp"/><path class="yox3j-b4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-book"} {...others} />);
}

export default Component;
