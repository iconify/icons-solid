import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x7jeq1w3z.css';
import '../../css/j/jnwb-clph.css';
import '../../css/i/iccdh9bgu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="x7jeq1w3z"/><path clip-rule="evenodd" class="jnwb-clph"/><path class="iccdh9bgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:smartphone-shake"} {...others} />);
}

export default Component;
