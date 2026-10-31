import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdvdcyb5j.css';
import '../../css/y/yl87xjx-v.css';
import '../../css/y/yvrecxqrc.css';
import '../../css/m/mw8pacg6g.css';
import '../../css/e/ea9rbpfsx.css';
import '../../css/j/jh7nqy5-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kdvdcyb5j wm-k"/><path class="wm-k yl87xjx-v"/><path class="wm-k yvrecxqrc"/><path class="mw8pacg6g wm-shadow"/><path class="ea9rbpfsx wm-shine"/><path class="jh7nqy5-o wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:keyboard"} {...others} />);
}

export default Component;
