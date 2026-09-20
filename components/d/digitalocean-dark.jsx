import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ma2cklw3p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ma2cklw3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:digitalocean-dark"} {...others} />);
}

export default Component;
