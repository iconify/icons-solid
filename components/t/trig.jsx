import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r6hs_vtvx.css';
import '../../css/w/wwvfhx6jo.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="r6hs_vtvx"/><path class="wwvfhx6jo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:trig"} {...others} />);
}

export default Component;
