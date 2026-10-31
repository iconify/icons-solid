import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4srfpgqj.css';
import '../../css/y/yasj7jbry.css';
import '../../css/j/joikuzozf.css';
import '../../css/v/vq5nf3b-u.css';
import '../../css/b/bqetlg-fp.css';
import '../../css/w/wpjewwbbr.css';
import '../../css/b/bdt156b1c.css';
import '../../css/t/tskywfw6e.css';
import '../../css/c/c-gqmnb2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c4srfpgqj wm-k"/><path class="wm-a yasj7jbry"/><path class="joikuzozf wm-deco"/><path class="vq5nf3b-u wm-k"/><path class="bqetlg-fp wm-k"/><path class="wm-a wpjewwbbr"/><path class="bdt156b1c wm-shadow"/><path class="tskywfw6e wm-shine"/><path class="c-gqmnb2d wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:mandarin-orange"} {...others} />);
}

export default Component;
