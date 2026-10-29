import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/psyzc1_dw.css';
import '../../css/i/igb16csex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="psyzc1_dw"/><path class="igb16csex wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wand"} {...others} />);
}

export default Component;
