import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/f1msnb5-c.css';
import '../../css/p/pshki8f7n.css';
import '../../css/d/dtmyh0hhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="f1msnb5-c"/><path class="pshki8f7n"/><path class="dtmyh0hhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:sailboat"} {...others} />);
}

export default Component;
