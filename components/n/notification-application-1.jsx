import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y5c-idbjg.css';
import '../../css/a/a8pyjk2nh.css';
import '../../css/n/n29z0kbys.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="y5c-idbjg"/><path clip-rule="evenodd" class="a8pyjk2nh"/><path class="n29z0kbys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:notification-application-1"} {...others} />);
}

export default Component;
