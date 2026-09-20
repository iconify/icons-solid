import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9-nmqbvh.css';
import '../../css/c/cweualbvx.css';
import '../../css/x/xut3d3bpk.css';
import '../../css/m/mu2tdkvgi.css';
import '../../css/z/zjyqwjlzo.css';

const viewBox = {"width":352.28,"height":398.67};
const content = `<path class="x9-nmqbvh"/><path class="cweualbvx"/><path class="xut3d3bpk"/><path class="mu2tdkvgi"/><path class="zjyqwjlzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tiktok-light"} {...others} />);
}

export default Component;
