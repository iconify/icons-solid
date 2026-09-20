import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvwgg2gcm.css';
import '../../css/n/n9dovwblw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bvwgg2gcm"/><path class="n9dovwblw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:calagopus-light"} {...others} />);
}

export default Component;
