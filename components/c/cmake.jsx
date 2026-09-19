import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s85i_fbsw.css';
import '../../css/o/ov9g6-b6k.css';
import '../../css/e/eww8hdbpb.css';
import '../../css/l/lbhftjbbf.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="s85i_fbsw"/><path class="ov9g6-b6k"/><path class="eww8hdbpb"/><path class="lbhftjbbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:cmake"} {...others} />);
}

export default Component;
