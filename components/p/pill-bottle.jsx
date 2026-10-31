import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fgn244buj.css';
import '../../css/x/x4rfjsnze.css';
import '../../css/z/z3rqecu7z.css';
import '../../css/r/r4ha0ubog.css';
import '../../css/n/nvuunyfqh.css';
import '../../css/k/k6zy8-dpu.css';
import '../../css/a/ar6m-bcnf.css';
import '../../css/o/os_4nsb5h.css';
import '../../css/x/xyrui0y9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fgn244buj wm-k"/><path class="wm-a x4rfjsnze"/><path class="wm-deco z3rqecu7z"/><path class="r4ha0ubog wm-k"/><path class="nvuunyfqh wm-k"/><path class="k6zy8-dpu wm-a"/><path class="ar6m-bcnf wm-shadow"/><path class="os_4nsb5h wm-shine"/><path class="wm-shine xyrui0y9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:pill-bottle"} {...others} />);
}

export default Component;
