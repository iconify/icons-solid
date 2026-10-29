import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nuiwkrbpb.css';
import '../../css/o/o4zw-_-lq.css';
import '../../css/t/te_93rbyn.css';
import '../../css/c/cycxuv2pk.css';
import '../../css/r/rtsogobbr.css';
import '../../css/h/h87uv0due.css';
import '../../css/c/c9q2jgozj.css';
import '../../css/e/e38gb_uja.css';
import '../../css/k/k74e5-bvn.css';
import '../../css/o/o1lpqyb0u.css';
import '../../css/x/xtwaqybyl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nuiwkrbpb wm-shadow"/><path class="o4zw-_-lq wm-k"/><path class="te_93rbyn wm-k"/><path class="cycxuv2pk wm-k"/><path class="rtsogobbr wm-k"/><path class="h87uv0due wm-k"/><path class="c9q2jgozj wm-shine"/><path class="e38gb_uja wm-a"/><path class="k74e5-bvn wm-a"/><path class="o1lpqyb0u wm-a"/><path class="wm-a xtwaqybyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:replace"} {...others} />);
}

export default Component;
