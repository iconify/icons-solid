import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f41ybed1i.css';
import '../../css/m/m1x4wtgmy.css';
import '../../css/f/f9d6qcb-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="f41ybed1i"/><path class="m1x4wtgmy"/><path class="f9d6qcb-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:clipboard-note-sharp"} {...others} />);
}

export default Component;
