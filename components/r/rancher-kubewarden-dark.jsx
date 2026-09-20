import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cf4c8_ykb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cf4c8_ykb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rancher-kubewarden-dark"} {...others} />);
}

export default Component;
