import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hn_jahutr.css';
import '../../css/q/qtvna5bjx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hn_jahutr"/><path class="qtvna5bjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-magnet"} {...others} />);
}

export default Component;
