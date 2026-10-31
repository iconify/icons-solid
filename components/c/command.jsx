import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fbrlyc_hf.css';
import '../../css/g/gwe6u7bez.css';
import '../../css/d/dptutdbjq.css';
import '../../css/o/ojaixmb3c.css';
import '../../css/u/ud1vhdzlb.css';
import '../../css/t/t67v9_kbk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fbrlyc_hf wm-shadow"/><path class="gwe6u7bez wm-k"/><path class="dptutdbjq wm-k"/><path class="ojaixmb3c wm-k"/><path class="ud1vhdzlb wm-k"/><path class="t67v9_kbk wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:command"} {...others} />);
}

export default Component;
