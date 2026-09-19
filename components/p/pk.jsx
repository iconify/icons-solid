import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bxvx0cc-x.css';
import '../../css/g/gtaiscbqc.css';
import '../../css/l/lj8bjt19g.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="bxvx0cc-x"/><path class="gtaiscbqc"/><path class="lj8bjt19g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:pk"} {...others} />);
}

export default Component;
