import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/turntrbbk.css';
import '../../css/c/closq3bal.css';
import '../../css/x/xtw8gorhr.css';
import '../../css/t/t4hkzqgwx.css';
import '../../css/c/ck203sy_u.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="turntrbbk"/><path clip-rule="evenodd" class="closq3bal"/><path class="xtw8gorhr"/><path clip-rule="evenodd" class="t4hkzqgwx"/><path clip-rule="evenodd" class="ck203sy_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:flower-print"} {...others} />);
}

export default Component;
