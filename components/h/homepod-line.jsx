import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_5ziluza.css';
import '../../css/x/xi4gy0bjp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y_5ziluza"/><path class="xi4gy0bjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:homepod-line"} {...others} />);
}

export default Component;
