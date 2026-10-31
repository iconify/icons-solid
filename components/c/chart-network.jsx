import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qtcynp3pk.css';
import '../../css/x/xkv61pb5s.css';
import '../../css/h/h3tgxabnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qtcynp3pk wm-shadow"/><path class="wm-shadow xkv61pb5s"/><path class="h3tgxabnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chart-network"} {...others} />);
}

export default Component;
