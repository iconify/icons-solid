import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d8rm0wp9j.css';
import '../../css/u/uvhgt6hxi.css';
import '../../css/e/em3von1-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d8rm0wp9j"/><path class="uvhgt6hxi"/><path class="em3von1-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:app-window-graph"} {...others} />);
}

export default Component;
