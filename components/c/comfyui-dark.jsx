import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ad9uf7u_y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ad9uf7u_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:comfyui-dark"} {...others} />);
}

export default Component;
