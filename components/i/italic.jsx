import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jla1e7btt.css';
import '../../css/l/l_tpc_mpj.css';
import '../../css/y/yhmymybbn.css';
import '../../css/i/iygz478ut.css';
import '../../css/p/pmpej3bmd.css';
import '../../css/x/xkghymiry.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jla1e7btt wm-shadow"/><path class="l_tpc_mpj wm-k"/><path class="wm-k yhmymybbn"/><path class="iygz478ut wm-k"/><path class="pmpej3bmd wm-k"/><path class="wm-shine xkghymiry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:italic"} {...others} />);
}

export default Component;
