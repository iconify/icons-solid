import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wx5gq56ck.css';
import '../../css/q/qt018lhae.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="cuyn6tgcc"><path class="wx5gq56ck"/><path class="qt018lhae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:layout"} {...others} />);
}

export default Component;
