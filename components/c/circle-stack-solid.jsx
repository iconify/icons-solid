import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bw5x8jbeo.css';
import '../../css/f/fcrg7jb_a.css';
import '../../css/h/hp5c_5epy.css';
import '../../css/v/vahsu3btp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bw5x8jbeo"/><path class="fcrg7jb_a"/><path class="hp5c_5epy"/><path class="vahsu3btp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:circle-stack-solid"} {...others} />);
}

export default Component;
