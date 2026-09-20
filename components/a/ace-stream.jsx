import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9--i9bid.css';
import '../../css/k/kp83vo4-e.css';
import '../../css/f/fcvnsw9zt.css';
import '../../css/i/i-otnfmzx.css';
import '../../css/a/ajh8fsxju.css';
import '../../css/n/n_fv7b7om.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w9--i9bid"/><path class="kp83vo4-e"/><path class="fcvnsw9zt"/><path class="i-otnfmzx"/><path class="ajh8fsxju"/><path class="n_fv7b7om"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ace-stream"} {...others} />);
}

export default Component;
