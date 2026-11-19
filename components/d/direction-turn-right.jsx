import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qiivxj9lp.css';
import '../../css/v/vhdrq4p5a.css';
import '../../css/x/xcvy7wb_x.css';
import '../../css/z/zdor7g_9a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qiivxj9lp"/><path class="vhdrq4p5a"/><path class="xcvy7wb_x"/><path class="zdor7g_9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:direction-turn-right"} {...others} />);
}

export default Component;
