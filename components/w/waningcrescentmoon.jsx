import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxet6lfrt.css';
import '../../css/w/wnir0lvso.css';
import '../../css/d/d7yumb3px.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hxet6lfrt"/><path class="wnir0lvso"/><path class="d7yumb3px"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:waningcrescentmoon"} {...others} />);
}

export default Component;
