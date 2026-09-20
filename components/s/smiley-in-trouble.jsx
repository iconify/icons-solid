import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gs8j9g__t.css';
import '../../css/t/tnotst_dm.css';
import '../../css/r/rky1rxb2x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gs8j9g__t"/><path class="tnotst_dm"/><path class="rky1rxb2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:smiley-in-trouble"} {...others} />);
}

export default Component;
