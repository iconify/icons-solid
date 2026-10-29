import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9fcrsv2i.css';
import '../../css/g/gke_r-j4g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow x9fcrsv2i"/><path class="gke_r-j4g wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:menu"} {...others} />);
}

export default Component;
