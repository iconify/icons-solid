import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yubpi9bqf.css';
import '../../css/j/jkbq94bnk.css';
import '../../css/h/hufk8dbrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yubpi9bqf"/><path class="jkbq94bnk"/><path clip-rule="evenodd" class="hufk8dbrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-square-2-bold"} {...others} />);
}

export default Component;
