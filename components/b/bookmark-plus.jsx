import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ny98tkebr.css';
import '../../css/y/y5n8_ubit.css';
import '../../css/m/mtnx_vbue.css';
import '../../css/l/lesj6_bsq.css';
import '../../css/o/odjobjbut.css';
import '../../css/k/kxak-9bjf.css';
import '../../css/v/vjxf3dulj.css';
import '../../css/w/wjhtpubmj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ny98tkebr wm-k"/><path class="wm-deco y5n8_ubit"/><path class="mtnx_vbue wm-k"/><path class="lesj6_bsq wm-k"/><path class="odjobjbut wm-shadow"/><path class="kxak-9bjf wm-shine"/><path class="vjxf3dulj wm-shine"/><path class="wjhtpubmj wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:bookmark-plus"} {...others} />);
}

export default Component;
