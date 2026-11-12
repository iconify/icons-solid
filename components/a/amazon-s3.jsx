import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nstvbxb0m.css';
import '../../css/z/zukjp5bxm.css';
import '../../css/e/edbkswbvk.css';
import '../../css/e/ei60xkbzq.css';
import '../../css/t/ts74kj5dn.css';
import '../../css/u/ua6tm9bna.css';
import '../../css/m/m9ad-ebcz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nstvbxb0m"/><path class="zukjp5bxm"/><path class="edbkswbvk"/><path class="ei60xkbzq"/><path class="ts74kj5dn"/><path class="ua6tm9bna"/><path class="m9ad-ebcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:amazon-s3"} {...others} />);
}

export default Component;
