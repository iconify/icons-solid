import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q79wn3bzm.css';
import '../../css/u/uggtecbyc.css';
import '../../css/z/zo1gxrb_w.css';
import '../../css/c/cbhmyuuzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="q79wn3bzm wm-shadow"/><path class="uggtecbyc"/><path class="zo1gxrb_w"/><path class="cbhmyuuzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:plane-landing"} {...others} />);
}

export default Component;
