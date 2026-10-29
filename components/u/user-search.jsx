import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyouqzbzo.css';
import '../../css/m/mcj8uxbod.css';
import '../../css/n/nc_o3uazh.css';
import '../../css/e/ea4gvab0h.css';
import '../../css/c/c345295xc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uyouqzbzo wm-k"/><path class="mcj8uxbod wm-k"/><path class="nc_o3uazh wm-s"/><path class="ea4gvab0h wm-s"/><path class="c345295xc wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:user-search"} {...others} />);
}

export default Component;
