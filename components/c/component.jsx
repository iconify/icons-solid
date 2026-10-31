import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a40_mdtwq.css';
import '../../css/h/hldc76bzf.css';
import '../../css/u/u1bpel-mm.css';
import '../../css/y/yvgz3ibge.css';
import '../../css/a/azu7xhbme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="a40_mdtwq wm-shadow"/><path class="hldc76bzf"/><path class="u1bpel-mm"/><path class="yvgz3ibge"/><path class="azu7xhbme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:component"} {...others} />);
}

export default Component;
