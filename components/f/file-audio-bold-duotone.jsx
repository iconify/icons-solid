import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_dr2jbnp.css';
import '../../css/y/ya_55rppu.css';
import '../../css/c/c5pvwgjsk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w_dr2jbnp"/><path clip-rule="evenodd" class="ya_55rppu"/><path class="c5pvwgjsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-audio-bold-duotone"} {...others} />);
}

export default Component;
