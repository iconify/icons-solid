import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_zholbmc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u_zholbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:un-flag-ltr"} {...others} />);
}

export default Component;
