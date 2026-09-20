import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/forfs2b7r.css';
import '../../css/h/hkw9--bai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="forfs2b7r"/><path clip-rule="evenodd" class="hkw9--bai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:monitor-expressive"} {...others} />);
}

export default Component;
