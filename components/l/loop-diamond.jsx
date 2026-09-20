import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at2dx1rbn.css';
import '../../css/m/mkkam-3zu.css';
import '../../css/y/yseds6b5o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="at2dx1rbn"><path class="mkkam-3zu"/><path class="yseds6b5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:loop-diamond"} {...others} />);
}

export default Component;
