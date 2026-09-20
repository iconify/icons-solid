import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ego17gzid.css';
import '../../css/v/vu_nye9-y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ego17gzid"/><path class="vu_nye9-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:etherpad-dark"} {...others} />);
}

export default Component;
