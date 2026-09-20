import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4x-fs84m.css';
import '../../css/u/uk7qgtbdq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w4x-fs84m"/><circle class="uk7qgtbdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:map-pin"} {...others} />);
}

export default Component;
