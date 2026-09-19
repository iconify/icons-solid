import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itc5zdbai.css';
import '../../css/r/rk-x6tbbo.css';
import '../../css/z/zayszsbla.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="itc5zdbai"/><path class="rk-x6tbbo"/><path class="zayszsbla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-help-outline"} {...others} />);
}

export default Component;
