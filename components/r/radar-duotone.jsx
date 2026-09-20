import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgu19vbwy.css';
import '../../css/r/rwqf32bdv.css';
import '../../css/v/vj_4whbgq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sgu19vbwy"/><path class="rwqf32bdv"/><path class="vj_4whbgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:radar-duotone"} {...others} />);
}

export default Component;
