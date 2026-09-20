import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i43u13dxb.css';
import '../../css/k/kmc5z7fpw.css';
import '../../css/n/njudr8bor.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i43u13dxb"/><path class="kmc5z7fpw"/><path class="njudr8bor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:zoom-in-magnifier-1"} {...others} />);
}

export default Component;
