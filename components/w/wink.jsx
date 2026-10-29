import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz-e1qbmo.css';
import '../../css/b/b3_4zct_v.css';
import '../../css/y/yzao4n0np.css';
import '../../css/y/ylce7gb5z.css';
import '../../css/t/tdd7l8bvj.css';
import '../../css/f/fywpfvbtz.css';
import '../../css/d/dfw46cvyo.css';
import '../../css/u/uz91xdb2r.css';
import '../../css/i/i43-l3awe.css';
import '../../css/l/lyhiflckg.css';
import '../../css/o/okoxr68bp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tz-e1qbmo wm-shadow"/><path class="b3_4zct_v wm-k"/><path class="wm-k yzao4n0np"/><path class="wm-k ylce7gb5z"/><path class="tdd7l8bvj wm-k"/><path class="fywpfvbtz wm-shine"/><path class="dfw46cvyo wm-k"/><path class="uz91xdb2r wm-a"/><path class="i43-l3awe wm-a"/><path class="lyhiflckg wm-a"/><path class="okoxr68bp wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:wink"} {...others} />);
}

export default Component;
