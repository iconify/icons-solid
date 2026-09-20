import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/keb0ywb0m.css';
import '../../css/p/ph16zsbsr.css';
import '../../css/q/qcrrs-enw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="keb0ywb0m"/><path class="ph16zsbsr"/><path class="qcrrs-enw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:multimedia-controls-button-next"} {...others} />);
}

export default Component;
