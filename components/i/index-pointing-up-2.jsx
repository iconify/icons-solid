import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uymgdabjo.css';
import '../../css/x/xs85297rz.css';
import '../../css/f/fy-uckbbb.css';
import '../../css/s/s_rlw9w4w.css';
import '../../css/c/cyv0geb9r.css';
import '../../css/h/hkjaid5cp.css';
import '../../css/y/y3rl-rb3f.css';
import '../../css/b/bngyhabph.css';
import '../../css/m/ml-shtb1s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uymgdabjo"/><path class="xs85297rz"/><path class="fy-uckbbb"/><path class="s_rlw9w4w"/><path class="cyv0geb9r"/><path class="hkjaid5cp"/><path class="y3rl-rb3f"/><path class="bngyhabph"/><path class="ml-shtb1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:index-pointing-up-2"} {...others} />);
}

export default Component;
