import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1cwtbc5g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t1cwtbc5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:self-hosted-gateway-light"} {...others} />);
}

export default Component;
