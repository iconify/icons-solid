import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z5kkujbuz.css';
import '../../css/t/t6fq8pwwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z5kkujbuz"/><path clip-rule="evenodd" class="t6fq8pwwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:lock-active"} {...others} />);
}

export default Component;
