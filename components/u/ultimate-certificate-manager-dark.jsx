import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmnfu7blq.css';
import '../../css/l/lprgm5wxz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cmnfu7blq"/><path class="lprgm5wxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ultimate-certificate-manager-dark"} {...others} />);
}

export default Component;
