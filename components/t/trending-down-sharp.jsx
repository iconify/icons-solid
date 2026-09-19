import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4a-oac3f.css';
import '../../css/k/klwyf98zv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q4a-oac3f"/><path class="klwyf98zv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:trending-down-sharp"} {...others} />);
}

export default Component;
