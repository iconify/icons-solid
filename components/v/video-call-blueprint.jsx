import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/e_hgvd7ok.css';
import '../../css/a/ae-w54boi.css';
import '../../css/c/cdtpr9i4l.css';
import '../../css/u/up0li1b6w.css';
import '../../css/k/kj_-zqb7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="e_hgvd7ok wm-deco"/><path class="ae-w54boi wm-deco"/><path class="cdtpr9i4l wm-k"/><path class="up0li1b6w wm-a"/><path class="kj_-zqb7o wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:video-call-blueprint"} {...others} />);
}

export default Component;
