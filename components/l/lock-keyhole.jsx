import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/cj5vslb_x.css';
import '../../css/i/iu7n2nbwr.css';
import '../../css/b/b86buo32x.css';
import '../../css/e/e_u7zo-5y.css';
import '../../css/u/ugzrm7bka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="cj5vslb_x"/><path class="iu7n2nbwr wm-shine"/><path class="b86buo32x wm-k"/><path class="e_u7zo-5y wm-a"/><path class="ugzrm7bka wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:lock-keyhole"} {...others} />);
}

export default Component;
