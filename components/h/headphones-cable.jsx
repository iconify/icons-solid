import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j9qia6m1g.css';
import '../../css/x/xme3sy4ib.css';
import '../../css/e/elcmgfb-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j9qia6m1g"/><path class="xme3sy4ib"/><path class="elcmgfb-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:headphones-cable"} {...others} />);
}

export default Component;
