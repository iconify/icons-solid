import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgvsm8bkl.css';
import '../../css/z/zyed28-7m.css';
import '../../css/v/vugil5bsm.css';
import '../../css/e/e_n9s58xp.css';
import '../../css/y/y92f2qblx.css';
import '../../css/e/er9_2_bjd.css';
import '../../css/o/o-vugzbgf.css';
import '../../css/y/yumzeobpq.css';
import '../../css/u/ui2wz_n-y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pgvsm8bkl"/><path class="zyed28-7m"/><path class="vugil5bsm"/><path class="e_n9s58xp"/><path class="y92f2qblx"/><path class="er9_2_bjd"/><path class="o-vugzbgf"/><path class="yumzeobpq"/><path class="ui2wz_n-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:circle-dot-dashed-outline"} {...others} />);
}

export default Component;
