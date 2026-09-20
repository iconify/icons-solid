import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uxxmxxb7c.css';
import '../../css/v/v-o59-bgv.css';
import '../../css/z/znj1xziig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uxxmxxb7c"/><path class="v-o59-bgv"/><path class="znj1xziig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:layers-alt"} {...others} />);
}

export default Component;
