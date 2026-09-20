import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gip2fsogj.css';
import '../../css/h/hhrevwgtq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gip2fsogj"/><path class="hhrevwgtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tubetimeout-light"} {...others} />);
}

export default Component;
