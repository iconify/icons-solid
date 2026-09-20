import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/npm0a9b3d.css';
import '../../css/w/wero9rb8x.css';
import '../../css/q/qety7jbux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="npm0a9b3d"/><path class="wero9rb8x"/><path class="qety7jbux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:messages-bubble-menu"} {...others} />);
}

export default Component;
