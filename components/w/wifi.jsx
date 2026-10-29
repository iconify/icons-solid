import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wd0_zpt6n.css';
import '../../css/d/dqiuvnbeo.css';
import '../../css/r/r01d_jbcc.css';
import '../../css/o/ob7k2wb4l.css';
import '../../css/n/ncv6rfbff.css';
import '../../css/n/nklha8zqe.css';
import '../../css/i/if2at-b1r.css';
import '../../css/b/b1xv-tbdh.css';
import '../../css/j/j9anwpbki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wd0_zpt6n wm-shadow"/><path class="dqiuvnbeo wm-shadow"/><path class="r01d_jbcc"/><path class="ob7k2wb4l"/><path class="ncv6rfbff"/><path class="nklha8zqe"/><path class="if2at-b1r wm-shine"/><path class="b1xv-tbdh wm-shine"/><path class="j9anwpbki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:wifi"} {...others} />);
}

export default Component;
