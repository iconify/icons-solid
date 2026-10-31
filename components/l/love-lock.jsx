import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ye85m36wi.css';
import '../../css/f/fi2199b2p.css';
import '../../css/z/zl8ccnwit.css';
import '../../css/d/d-e-dgbnw.css';
import '../../css/h/hz2l4c11c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow ye85m36wi"/><path class="fi2199b2p"/><path class="zl8ccnwit"/><path class="d-e-dgbnw"/><path class="hz2l4c11c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:love-lock"} {...others} />);
}

export default Component;
