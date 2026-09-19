import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxbe2vbtu.css';
import '../../css/z/ziq40nb1a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fxbe2vbtu"/><path class="ziq40nb1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:emptynote"} {...others} />);
}

export default Component;
