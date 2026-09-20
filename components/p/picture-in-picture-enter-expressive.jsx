import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y6ns76bqp.css';
import '../../css/z/z9e9ydbaf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y6ns76bqp"/><path clip-rule="evenodd" class="z9e9ydbaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:picture-in-picture-enter-expressive"} {...others} />);
}

export default Component;
