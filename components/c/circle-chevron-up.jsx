import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz-e1qbmo.css';
import '../../css/b/b3_4zct_v.css';
import '../../css/r/ryz23rbfn.css';
import '../../css/y/ylce7gb5z.css';
import '../../css/t/tdd7l8bvj.css';
import '../../css/f/fywpfvbtz.css';
import '../../css/d/dfw46cvyo.css';
import '../../css/q/q2cnzqbvf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tz-e1qbmo wm-shadow"/><path class="b3_4zct_v wm-k"/><path class="ryz23rbfn wm-k"/><path class="wm-k ylce7gb5z"/><path class="tdd7l8bvj wm-k"/><path class="fywpfvbtz wm-shine"/><path class="dfw46cvyo wm-k"/><path class="q2cnzqbvf wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:circle-chevron-up"} {...others} />);
}

export default Component;
