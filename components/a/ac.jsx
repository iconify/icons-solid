import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o9mox1-xv.css';
import '../../css/x/xj1nhm_zh.css';
import '../../css/i/i1cj2t61h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="o9mox1-xv"/><path clip-rule="evenodd" class="xj1nhm_zh"/><path class="i1cj2t61h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ac"} {...others} />);
}

export default Component;
