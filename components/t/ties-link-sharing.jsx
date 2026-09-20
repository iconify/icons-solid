import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5wa9vbik.css';
import '../../css/d/d_2uu07zh.css';
import '../../css/y/y6nv1wb6i.css';
import '../../css/b/bppslcvit.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y5wa9vbik"/><path class="d_2uu07zh"/><path class="y6nv1wb6i"/><path class="bppslcvit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ties-link-sharing"} {...others} />);
}

export default Component;
