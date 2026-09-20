import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy_lvofyo.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/no7mv0dyu.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/f/fw-0c04el.css';

const viewBox = {"width":24,"height":25};
const content = `<defs><path id="SVGFHhwLbcW" class="gy_lvofyo"/></defs><g class="ft5dv1b6b"><path class="no7mv0dyu"/><use href="#SVGFHhwLbcW"/><g class="p_3zmsvya"><use href="#SVGFHhwLbcW"/><path class="fw-0c04el"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:font-background"} {...others} />);
}

export default Component;
