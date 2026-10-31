import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4s_92bkg.css';
import '../../css/s/so7m0db_c.css';
import '../../css/t/thhtlebdq.css';
import '../../css/w/weiwl_b6p.css';
import '../../css/n/nhqdhzb4w.css';
import '../../css/i/impgp2bog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a4s_92bkg wm-k"/><path class="so7m0db_c wm-k"/><path class="thhtlebdq wm-k"/><path class="weiwl_b6p wm-shadow"/><path class="nhqdhzb4w wm-shine"/><path class="impgp2bog wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:ticket"} {...others} />);
}

export default Component;
