import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b852bgb5f.css';
import '../../css/g/g7bbuzehg.css';
import '../../css/s/s_m3fpstd.css';
import '../../css/g/gkz1pdpgm.css';
import '../../css/p/p8-cqy26s.css';
import '../../css/u/uwbervb6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b852bgb5f wm-shadow"/><path class="g7bbuzehg"/><path class="s_m3fpstd"/><path class="gkz1pdpgm"/><path class="p8-cqy26s"/><path class="uwbervb6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:ethernet-port"} {...others} />);
}

export default Component;
