import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8jfmzhjz.css';
import '../../css/x/xvfmjobgc.css';
import '../../css/m/mr9w70b2y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="q8jfmzhjz"/><path clip-rule="evenodd" class="xvfmjobgc"/><path class="mr9w70b2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:wind-wheel-duo"} {...others} />);
}

export default Component;
