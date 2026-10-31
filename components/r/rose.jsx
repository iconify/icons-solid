import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fkj4x1zme.css';
import '../../css/s/s6p-_liru.css';
import '../../css/c/cg3yb2b9a.css';
import '../../css/c/c9vqod8lt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fkj4x1zme wm-shadow"/><path class="s6p-_liru"/><path class="cg3yb2b9a"/><path class="c9vqod8lt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:rose"} {...others} />);
}

export default Component;
