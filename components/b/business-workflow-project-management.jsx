import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sihth6olo.css';
import '../../css/i/irxvhdb_q.css';
import '../../css/u/ujynyrbxi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sihth6olo"/><path class="irxvhdb_q"/><path class="ujynyrbxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:business-workflow-project-management"} {...others} />);
}

export default Component;
