import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvlkclb-m.css';
import '../../css/q/qbcnl7b4u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jvlkclb-m"/><path class="qbcnl7b4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-low-outline"} {...others} />);
}

export default Component;
