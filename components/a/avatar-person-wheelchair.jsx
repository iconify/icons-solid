import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o9116fb6p.css';
import '../../css/o/o7es60yyc.css';
import '../../css/g/gvv2ijfji.css';
import '../../css/s/s9232rcgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="o9116fb6p wm-shadow"/><path class="o7es60yyc"/><path class="gvv2ijfji"/><path class="s9232rcgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-person-wheelchair"} {...others} />);
}

export default Component;
