import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/c12o_4bzm.css';
import '../../css/p/pd3_r0b4h.css';
import '../../css/z/zdoh6ubhg.css';
import '../../css/o/ok9s4-bxw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path clip-rule="evenodd" class="c12o_4bzm"/><path class="pd3_r0b4h"/><path class="zdoh6ubhg"/><path class="ok9s4-bxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:pesticide"} {...others} />);
}

export default Component;
