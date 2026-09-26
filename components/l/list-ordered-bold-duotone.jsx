import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/k/kbwwwob-r.css';
import '../../css/x/xaqhq8b1h.css';
import '../../css/h/hxsxwabve.css';
import '../../css/i/inn2k8f_x.css';
import '../../css/o/owcgvxbrw.css';
import '../../css/c/cn3dkgbwg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="kbwwwob-r"/><path class="xaqhq8b1h"/><path class="hxsxwabve"/><path class="inn2k8f_x"/></g><path class="owcgvxbrw"/><path class="cn3dkgbwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-ordered-bold-duotone"} {...others} />);
}

export default Component;
