import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kep1zf04e.css';
import '../../css/n/na94o3ufs.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="kep1zf04e"/><path class="na94o3ufs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:map-user"} {...others} />);
}

export default Component;
