import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yb6-zfvur.css';
import '../../css/d/db6sjz3eu.css';
import '../../css/w/wpifukexa.css';
import '../../css/h/h5rncijzu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="yb6-zfvur"/><path class="db6sjz3eu"/><path class="wpifukexa"/><path class="h5rncijzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:maximize-2"} {...others} />);
}

export default Component;
