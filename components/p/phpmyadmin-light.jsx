import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncc_k81kj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ncc_k81kj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:phpmyadmin-light"} {...others} />);
}

export default Component;
