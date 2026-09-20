import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7c-2eb5a.css';
import '../../css/r/r1nvtit5z.css';
import '../../css/s/snwmkb8ok.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x7c-2eb5a"/><path class="r1nvtit5z"/><path class="snwmkb8ok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:colota"} {...others} />);
}

export default Component;
