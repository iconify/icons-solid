import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hj89xoekp.css';
import '../../css/p/p9l-57bxx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="hj89xoekp"/><path class="p9l-57bxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:home-2"} {...others} />);
}

export default Component;
