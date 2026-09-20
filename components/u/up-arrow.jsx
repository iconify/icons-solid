import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/yc3mgcbcd.css';
import '../../css/y/ycqvuzb7e.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="yc3mgcbcd"/><path class="ycqvuzb7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:up-arrow"} {...others} />);
}

export default Component;
