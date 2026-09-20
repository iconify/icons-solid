import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wb1c4bhnv.css';
import '../../css/o/oa7hxhwxl.css';
import '../../css/o/ozbh1rb0t.css';
import '../../css/r/r9tg3vy7x.css';
import '../../css/k/ka6wrob_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wb1c4bhnv"/><path clip-rule="evenodd" class="oa7hxhwxl"/><path class="ozbh1rb0t"/><path class="r9tg3vy7x"/><path class="ka6wrob_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:image-file-dollar"} {...others} />);
}

export default Component;
