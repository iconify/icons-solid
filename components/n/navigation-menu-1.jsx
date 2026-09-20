import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s88fiyxta.css';
import '../../css/s/sxn3pw2ra.css';
import '../../css/e/e_h74yeyp.css';
import '../../css/l/lkzjjxs4m.css';
import '../../css/m/mu49abb2k.css';
import '../../css/z/z6b_5_bja.css';
import '../../css/u/ux4ho3bay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s88fiyxta"/><path class="sxn3pw2ra"/><path class="e_h74yeyp"/><path class="lkzjjxs4m"/><path class="mu49abb2k"/><path class="z6b_5_bja"/><path class="ux4ho3bay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:navigation-menu-1"} {...others} />);
}

export default Component;
