import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/m/myfghlzko.css';
import '../../css/j/jq2lxvddl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><rect class="myfghlzko"/><path class="jq2lxvddl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:ruler"} {...others} />);
}

export default Component;
