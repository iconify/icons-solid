import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zog1b-bvl.css';
import '../../css/f/fsbpayxoj.css';
import '../../css/a/acdxx4bqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zog1b-bvl"/><path class="fsbpayxoj"/><path class="acdxx4bqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:bug-sharp"} {...others} />);
}

export default Component;
