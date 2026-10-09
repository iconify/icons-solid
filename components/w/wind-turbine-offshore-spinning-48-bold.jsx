import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g57js3knb.css';
import '../../css/j/j5yt-usot.css';
import '../../css/g/gva-87b1l.css';
import '../../css/n/n4rdx-b-t.css';
import '../../css/l/lrjt8__gh.css';
import '../../css/r/r1ik8hbhd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g57js3knb"/><path class="j5yt-usot"/><path class="gva-87b1l"/><path class="n4rdx-b-t"/><path class="lrjt8__gh"/><path class="r1ik8hbhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-offshore-spinning-48-bold"} {...others} />);
}

export default Component;
