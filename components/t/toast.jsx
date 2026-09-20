import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jy2ppg2ml.css';
import '../../css/x/xra4spkdz.css';
import '../../css/l/l6ji00b6j.css';
import '../../css/t/twg44jb8c.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jy2ppg2ml"/><path class="xra4spkdz"/><path class="l6ji00b6j"/><path class="twg44jb8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:toast"} {...others} />);
}

export default Component;
