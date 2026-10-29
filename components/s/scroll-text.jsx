import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4-rm4bph.css';
import '../../css/d/dgyds9i_n.css';
import '../../css/y/yz-rbn7-o.css';
import '../../css/k/k25tcgb8e.css';
import '../../css/u/unvs6j7rk.css';
import '../../css/s/s821tbctb.css';
import '../../css/b/brsqywlbb.css';
import '../../css/g/gq166npiq.css';
import '../../css/l/lu4yxvd-o.css';
import '../../css/e/ezq5ltbst.css';
import '../../css/z/zm0nxeb7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f4-rm4bph wm-k"/><path class="dgyds9i_n wm-k"/><path class="wm-k yz-rbn7-o"/><path class="k25tcgb8e wm-a"/><path class="unvs6j7rk wm-k"/><path class="s821tbctb wm-k"/><path class="brsqywlbb wm-k"/><path class="gq166npiq wm-shine"/><path class="lu4yxvd-o wm-k"/><path class="ezq5ltbst wm-k"/><path class="wm-k zm0nxeb7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:scroll-text"} {...others} />);
}

export default Component;
