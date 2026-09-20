import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yz3t0s22g.css';
import '../../css/w/wtzvhdbph.css';
import '../../css/m/mz920dbnl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yz3t0s22g"/><path class="wtzvhdbph"/><path class="mz920dbnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:retouch-contrast"} {...others} />);
}

export default Component;
