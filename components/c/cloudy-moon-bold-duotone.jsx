import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbi4wky7o.css';
import '../../css/s/sfo2tsbqu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bbi4wky7o"/><path class="sfo2tsbqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloudy-moon-bold-duotone"} {...others} />);
}

export default Component;
