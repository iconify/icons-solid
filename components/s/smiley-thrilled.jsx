import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zu4sstb8d.css';
import '../../css/t/tdcyjvbxs.css';
import '../../css/t/tlw9-9bjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zu4sstb8d"/><path class="tdcyjvbxs"/><path class="tlw9-9bjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:smiley-thrilled"} {...others} />);
}

export default Component;
