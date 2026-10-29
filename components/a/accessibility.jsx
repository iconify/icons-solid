import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_sg2v3ed.css';
import '../../css/j/jjy8trk4k.css';
import '../../css/h/hcgmb8bbq.css';
import '../../css/j/jfytd4b0q.css';
import '../../css/l/l5hd67btl.css';
import '../../css/f/f_0-ewbid.css';
import '../../css/h/h19gyih6i.css';
import '../../css/y/y7zym6lkp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n_sg2v3ed wm-k"/><path class="jjy8trk4k wm-k"/><path class="hcgmb8bbq wm-k"/><path class="jfytd4b0q wm-shine"/><path class="l5hd67btl wm-a"/><path class="f_0-ewbid wm-a"/><path class="h19gyih6i wm-a"/><path class="wm-a y7zym6lkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:accessibility"} {...others} />);
}

export default Component;
