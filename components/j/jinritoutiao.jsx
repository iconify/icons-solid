import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbw7r3bce.css';
import '../../css/t/tcu8_9yus.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xbw7r3bce"/><path clip-rule="evenodd" class="tcu8_9yus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:jinritoutiao"} {...others} />);
}

export default Component;
