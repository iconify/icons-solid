import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nyuplcwja.css';
import '../../css/c/cfsulbc1g.css';
import '../../css/j/j_n-5hl9n.css';
import '../../css/w/wd-wa2irw.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nyuplcwja"/><path class="cfsulbc1g"/><path class="j_n-5hl9n"/><path class="wd-wa2irw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:microphone"} {...others} />);
}

export default Component;
