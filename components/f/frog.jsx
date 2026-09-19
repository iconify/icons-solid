import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_dkz_b7w.css';
import '../../css/c/c71lr3byd.css';
import '../../css/o/o-rk52blx.css';
import '../../css/v/vpdowm55h.css';
import '../../css/r/ryq8sb6as.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="j_dkz_b7w"/><circle class="c71lr3byd"/><circle class="o-rk52blx"/><circle class="vpdowm55h"/><circle class="ryq8sb6as"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:frog"} {...others} />);
}

export default Component;
