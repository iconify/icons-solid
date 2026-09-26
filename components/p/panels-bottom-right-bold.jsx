import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hku6jab1q.css';
import '../../css/q/qia370byn.css';
import '../../css/h/hzk5kpusw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hku6jab1q"/><path class="qia370byn"/><path clip-rule="evenodd" class="hzk5kpusw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-bottom-right-bold"} {...others} />);
}

export default Component;
