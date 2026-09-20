import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lta_4qb-q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lta_4qb-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rancher-epinio-light"} {...others} />);
}

export default Component;
