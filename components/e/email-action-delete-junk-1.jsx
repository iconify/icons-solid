import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/du__ohb2q.css';
import '../../css/p/pnzxl9bns.css';
import '../../css/u/uw47fwbjg.css';
import '../../css/r/rjtz69l4y.css';
import '../../css/b/bx5hdegyl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="du__ohb2q"/><path class="pnzxl9bns"/><path class="uw47fwbjg"/><path class="rjtz69l4y"/><path class="bx5hdegyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:email-action-delete-junk-1"} {...others} />);
}

export default Component;
