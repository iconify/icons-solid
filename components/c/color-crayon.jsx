import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rdzx4fb0m.css';
import '../../css/r/rdyb-3bnh.css';
import '../../css/v/v9p7x7bnh.css';
import '../../css/t/trlxvac8s.css';
import '../../css/q/q7cfrmb4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rdzx4fb0m"/><path class="rdyb-3bnh"/><path class="v9p7x7bnh"/><path class="trlxvac8s"/><path class="q7cfrmb4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:color-crayon"} {...others} />);
}

export default Component;
