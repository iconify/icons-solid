import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/moat_y9bu.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="moat_y9bu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:money-bill-1-wave"} {...others} />);
}

export default Component;
