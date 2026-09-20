import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dxfoa2biv.css';
import '../../css/x/xne07zbte.css';
import '../../css/y/ydynjgp1t.css';
import '../../css/b/ba_9p4wve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dxfoa2biv"/><path class="xne07zbte"/><path class="ydynjgp1t"/><path class="ba_9p4wve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:view-eye-off"} {...others} />);
}

export default Component;
