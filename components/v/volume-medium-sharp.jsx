import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwr0ifb7o.css';
import '../../css/a/ahflddu7k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uwr0ifb7o"/><path class="ahflddu7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:volume-medium-sharp"} {...others} />);
}

export default Component;
