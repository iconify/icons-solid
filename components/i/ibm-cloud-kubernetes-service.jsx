import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwawrhueb.css';
import '../../css/d/dq6d_3byk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bwawrhueb"/><path class="dq6d_3byk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-kubernetes-service"} {...others} />);
}

export default Component;
