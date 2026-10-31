import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cc83ozb8o.css';
import '../../css/f/fl8liwb-h.css';
import '../../css/u/ugf_hwbph.css';
import '../../css/o/o6yln0ovx.css';
import '../../css/v/vewhpobdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cc83ozb8o wm-shadow"/><path class="fl8liwb-h"/><path class="ugf_hwbph"/><path class="o6yln0ovx wm-s"/><path class="vewhpobdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:rakhi"} {...others} />);
}

export default Component;
