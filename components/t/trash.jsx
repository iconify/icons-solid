import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ox-7crkhe.css';
import '../../css/x/x-797_g3v.css';
import '../../css/g/g1gju2brq.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="ox-7crkhe"/><path class="x-797_g3v"/><path clip-rule="evenodd" class="g1gju2brq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:trash"} {...others} />);
}

export default Component;
