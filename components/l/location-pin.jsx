import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1t1o_btq.css';
import '../../css/r/r-v6gebze.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r1t1o_btq"/><path class="r-v6gebze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:location-pin"} {...others} />);
}

export default Component;
