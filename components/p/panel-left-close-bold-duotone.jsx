import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vhosbdcvu.css';
import '../../css/t/t-_yyfhbn.css';
import '../../css/i/i32sc76-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vhosbdcvu"/><path class="t-_yyfhbn"/><path class="i32sc76-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-left-close-bold-duotone"} {...others} />);
}

export default Component;
