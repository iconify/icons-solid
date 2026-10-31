import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v86yx3b6f.css';
import '../../css/f/fne2pdbmz.css';
import '../../css/n/no_pq6-6s.css';
import '../../css/b/b2qohnadj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="v86yx3b6f"/><path class="fne2pdbmz wm-shine"/><path class="no_pq6-6s"/><path class="b2qohnadj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:rewind"} {...others} />);
}

export default Component;
