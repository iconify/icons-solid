import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ow-jzvb4m.css';
import '../../css/e/ehap8ibnk.css';
import '../../css/w/wpsd9e-pi.css';
import '../../css/c/cfwp83blx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ow-jzvb4m"/><path class="ehap8ibnk"/><path class="wpsd9e-pi"/><path class="cfwp83blx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:wind-face"} {...others} />);
}

export default Component;
