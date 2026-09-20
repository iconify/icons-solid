import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uz3z958ur.css';
import '../../css/u/utltrjg1m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uz3z958ur"/><path class="utltrjg1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:manifest-light"} {...others} />);
}

export default Component;
