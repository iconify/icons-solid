import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xgtstcblw.css';
import '../../css/z/zxllwrblm.css';
import '../../css/m/ms-hx8b4m.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="xgtstcblw"/><path class="zxllwrblm"/><path class="ms-hx8b4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:street-light"} {...others} />);
}

export default Component;
