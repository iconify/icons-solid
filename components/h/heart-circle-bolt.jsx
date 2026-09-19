import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rq7alcpun.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="rq7alcpun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:heart-circle-bolt"} {...others} />);
}

export default Component;
