import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e11d_o66i.css';
import '../../css/d/dqnuut_so.css';
import '../../css/l/lvl0v9gxc.css';
import '../../css/j/jhl4-dbhd.css';
import '../../css/z/zfs0izbrw.css';
import '../../css/q/q9s161bkh.css';
import '../../css/a/a2yiwx8dv.css';
import '../../css/y/yor3svbnk.css';
import '../../css/n/nellama7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e11d_o66i"/><path class="dqnuut_so"/><path class="lvl0v9gxc"/><path class="jhl4-dbhd"/><path class="zfs0izbrw"/><path class="q9s161bkh"/><path class="a2yiwx8dv"/><path class="yor3svbnk"/><path class="nellama7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:monetization-tablet-dollar"} {...others} />);
}

export default Component;
