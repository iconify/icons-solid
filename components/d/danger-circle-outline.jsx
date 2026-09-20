import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vzgygcepj.css';
import '../../css/j/jwj5s6brs.css';
import '../../css/w/wuvczemwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vzgygcepj"/><path class="jwj5s6brs"/><path clip-rule="evenodd" class="wuvczemwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:danger-circle-outline"} {...others} />);
}

export default Component;
