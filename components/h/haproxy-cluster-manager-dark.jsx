import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzmn72bbl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yzmn72bbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:haproxy-cluster-manager-dark"} {...others} />);
}

export default Component;
