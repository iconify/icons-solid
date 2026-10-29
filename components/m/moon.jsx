import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k01jo-u7o.css';
import '../../css/i/i44lddbdv.css';
import '../../css/y/yum_gybhk.css';
import '../../css/r/rkvrpmb5i.css';
import '../../css/t/t799pkbnr.css';
import '../../css/o/ogsu0gbgp.css';
import '../../css/i/i1cab4bgu.css';
import '../../css/j/jnppy4bio.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k01jo-u7o wm-shadow"/><path class="i44lddbdv wm-k"/><path class="wm-k yum_gybhk"/><path class="rkvrpmb5i wm-k"/><path class="t799pkbnr wm-k"/><path class="ogsu0gbgp wm-k"/><path class="i1cab4bgu wm-shine"/><path class="jnppy4bio wm-deco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:moon"} {...others} />);
}

export default Component;
