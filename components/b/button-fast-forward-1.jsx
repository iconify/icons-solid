import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8wwyzbhe.css';
import '../../css/m/m15ic9-bh.css';
import '../../css/w/wsl75lqdr.css';
import '../../css/q/q40l5m1ba.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="y8wwyzbhe"/><path class="m15ic9-bh"/><path class="wsl75lqdr"/><path class="q40l5m1ba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:button-fast-forward-1"} {...others} />);
}

export default Component;
