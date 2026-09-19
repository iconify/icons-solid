import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6rqk4blh.css';
import '../../css/r/ru1qjebin.css';
import '../../css/j/jshgl_dcu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m6rqk4blh"/><path class="ru1qjebin"/><path class="jshgl_dcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:turnedokhand"} {...others} />);
}

export default Component;
