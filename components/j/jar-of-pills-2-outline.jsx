import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xg86umcwm.css';
import '../../css/l/lmphbqbtw.css';
import '../../css/q/qakxvib_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xg86umcwm"/><path class="lmphbqbtw"/><path clip-rule="evenodd" class="qakxvib_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:jar-of-pills-2-outline"} {...others} />);
}

export default Component;
