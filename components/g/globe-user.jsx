import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rus7i6b6q.css';
import '../../css/n/na94o3ufs.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="rus7i6b6q"/><path class="na94o3ufs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:globe-user"} {...others} />);
}

export default Component;
