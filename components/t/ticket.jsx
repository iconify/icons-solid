import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4dgcvb5l.css';
import '../../css/g/gfl0n1-2m.css';
import '../../css/h/hnid9ww8z.css';
import '../../css/k/kym0hujjs.css';
import '../../css/s/sd-y33bap.css';
import '../../css/s/sxhck8b-y.css';
import '../../css/l/lis3c-ovk.css';
import '../../css/b/bl09y1bjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g4dgcvb5l wm-k"/><path class="gfl0n1-2m wm-k"/><path class="hnid9ww8z wm-k"/><path class="kym0hujjs wm-shine"/><path class="sd-y33bap wm-a"/><path class="sxhck8b-y wm-k"/><path class="lis3c-ovk wm-k"/><path class="bl09y1bjo wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:ticket"} {...others} />);
}

export default Component;
