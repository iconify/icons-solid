import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yuglmubmf.css';
import '../../css/q/q5z4b0cip.css';
import '../../css/r/r6_xsob4w.css';
import '../../css/j/jd3e4g0ah.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yuglmubmf"/><path class="q5z4b0cip"/><path class="r6_xsob4w"/><path class="jd3e4g0ah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:lipstick"} {...others} />);
}

export default Component;
