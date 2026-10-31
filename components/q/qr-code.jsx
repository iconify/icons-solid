import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f3iagebhn.css';
import '../../css/n/n7tximbqw.css';
import '../../css/g/gyya8zvic.css';
import '../../css/p/p9o4vvd7f.css';
import '../../css/h/h0yo7mbxe.css';
import '../../css/w/wsi42bsvm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="f3iagebhn wm-shadow"/><path class="n7tximbqw"/><path class="gyya8zvic"/><path class="p9o4vvd7f"/><path class="h0yo7mbxe"/><path class="wsi42bsvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:qr-code"} {...others} />);
}

export default Component;
