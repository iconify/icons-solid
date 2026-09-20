import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/juinv0b1g.css';
import '../../css/o/o_c9zpg-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="juinv0b1g"/><path class="o_c9zpg-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:ear"} {...others} />);
}

export default Component;
