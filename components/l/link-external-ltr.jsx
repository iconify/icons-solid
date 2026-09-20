import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jsmongb3e.css';
import '../../css/r/r_bfxptlm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jsmongb3e"/><path class="r_bfxptlm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:link-external-ltr"} {...others} />);
}

export default Component;
