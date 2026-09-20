import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mtm74unlw.css';
import '../../css/o/o91c38lko.css';
import '../../css/q/q3g2voh6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mtm74unlw"/><path class="o91c38lko"/><path clip-rule="evenodd" class="q3g2voh6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:banknote-2-bold"} {...others} />);
}

export default Component;
