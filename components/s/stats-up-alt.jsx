import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpv6dt-5r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kpv6dt-5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:stats-up-alt"} {...others} />);
}

export default Component;
