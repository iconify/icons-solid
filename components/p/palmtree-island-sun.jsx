import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wxgs__din.css';
import '../../css/j/jiep1lb5u.css';
import '../../css/z/zr_dy193o.css';
import '../../css/j/j3c5cyc6n.css';
import '../../css/o/oh4q5bctl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="wxgs__din"/><path class="jiep1lb5u"/><path class="zr_dy193o"/><path class="j3c5cyc6n"/><path class="oh4q5bctl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:palmtree-island-sun"} {...others} />);
}

export default Component;
