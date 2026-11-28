import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c9l6zdbzc.css';
import '../../css/b/bmmzlnboq.css';
import '../../css/i/ikwrflpbk.css';
import '../../css/b/bfmc13bjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="c9l6zdbzc"/><path class="bmmzlnboq"/><path class="ikwrflpbk"/><path class="bfmc13bjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ski"} {...others} />);
}

export default Component;
