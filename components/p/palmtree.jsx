import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_h132a_m.css';
import '../../css/f/fm754gtlz.css';
import '../../css/u/u9ev1ubbm.css';
import '../../css/b/b_-ksp75g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o_h132a_m"/><path class="fm754gtlz"/><path class="u9ev1ubbm"/><path class="b_-ksp75g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:palmtree"} {...others} />);
}

export default Component;
