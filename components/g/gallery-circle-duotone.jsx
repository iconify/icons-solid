import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jago5qb8n.css';
import '../../css/z/zwb14lhyy.css';
import '../../css/d/daz1012ly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jago5qb8n"/><path class="zwb14lhyy"/><path clip-rule="evenodd" class="daz1012ly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gallery-circle-duotone"} {...others} />);
}

export default Component;
