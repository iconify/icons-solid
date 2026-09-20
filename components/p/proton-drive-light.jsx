import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/na8uue77l.css';
import '../../css/d/d8n319blu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="na8uue77l"/><path class="d8n319blu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proton-drive-light"} {...others} />);
}

export default Component;
