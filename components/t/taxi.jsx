import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xnszy_bqt.css';
import '../../css/s/sxjwcfb2r.css';
import '../../css/w/wddjoxfah.css';
import '../../css/m/mqg4z3qsn.css';
import '../../css/m/mgtje0bph.css';
import '../../css/s/sx_9yf47e.css';
import '../../css/o/oaw6sbz2w.css';
import '../../css/n/nwxu1obhs.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="xnszy_bqt"/><path class="sxjwcfb2r"/><path class="wddjoxfah"/><path class="mqg4z3qsn"/><path class="mgtje0bph"/><path class="sx_9yf47e"/><path class="oaw6sbz2w"/><path class="nwxu1obhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:taxi"} {...others} />);
}

export default Component;
