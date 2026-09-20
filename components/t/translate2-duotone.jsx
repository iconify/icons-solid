import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dk_5p9bho.css';
import '../../css/g/goh_92aak.css';
import '../../css/a/akyg8sblr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dk_5p9bho"/><path clip-rule="evenodd" class="goh_92aak"/><path clip-rule="evenodd" class="akyg8sblr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:translate2-duotone"} {...others} />);
}

export default Component;
