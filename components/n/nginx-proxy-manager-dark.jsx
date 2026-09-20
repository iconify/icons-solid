import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8ngi2bsq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m8ngi2bsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nginx-proxy-manager-dark"} {...others} />);
}

export default Component;
