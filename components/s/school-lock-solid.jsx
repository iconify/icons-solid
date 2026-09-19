import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dvnyqw4kk.css';
import '../../css/h/hqu6vb2iv.css';
import '../../css/i/ii0i11bvp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dvnyqw4kk"/><path clip-rule="evenodd" class="hqu6vb2iv"/><path class="ii0i11bvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:school-lock-solid"} {...others} />);
}

export default Component;
