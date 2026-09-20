import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zz2bszbjw.css';
import '../../css/f/f9ka7ux3q.css';
import '../../css/c/cso0oobet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zz2bszbjw"/><path class="f9ka7ux3q"/><path class="cso0oobet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:nightstand3-duotone"} {...others} />);
}

export default Component;
