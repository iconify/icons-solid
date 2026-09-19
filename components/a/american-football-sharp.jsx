import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_3-2pbtd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w_3-2pbtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:american-football-sharp"} {...others} />);
}

export default Component;
