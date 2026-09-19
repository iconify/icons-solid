import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5surlbgg.css';
import '../../css/s/stpx8h04v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c5surlbgg"/><path class="stpx8h04v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:open-sharp"} {...others} />);
}

export default Component;
