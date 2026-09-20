import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/k/k__vmq.css';
import '../../css/r/rje0ii.css';
import '../../css/u/ul_dtz.css';
import '../../css/p/p9sajy.css';
import '../../css/s/so-from-60.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-cfpe7y.css';
import '../../css/d/d-p1facq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c k__vmq"/><path class="a0m25c rje0ii"/><path class="a0m25c ul_dtz"/><path class="p9sajy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:emoji-grin"} {...others} />);
}

export default Component;
