import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxj25kbiy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cxj25kbiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:listenarr-dark"} {...others} />);
}

export default Component;
