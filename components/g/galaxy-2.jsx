import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u143jdbtc.css';
import '../../css/b/b1-ka356e.css';
import '../../css/e/ewifwtbgj.css';
import '../../css/m/m-gxz2bed.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="u143jdbtc"/><path class="b1-ka356e"/><path class="ewifwtbgj"/><path class="m-gxz2bed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:galaxy-2"} {...others} />);
}

export default Component;
