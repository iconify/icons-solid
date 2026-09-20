import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ktbc2fn9o.css';
import '../../css/c/c12rmobxw.css';
import '../../css/b/bzbnxuzxv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ktbc2fn9o"/><path class="c12rmobxw"/><path class="bzbnxuzxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:cloud"} {...others} />);
}

export default Component;
