import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q0sawto7v.css';
import '../../css/f/f303xd4js.css';
import '../../css/x/xevrkbuac.css';
import '../../css/u/ushxrwbsh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="q0sawto7v"/><path class="f303xd4js"/><path clip-rule="evenodd" class="xevrkbuac"/><path class="ushxrwbsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pen-3-flat"} {...others} />);
}

export default Component;
