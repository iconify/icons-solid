import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sat7ci9ab.css';

const viewBox = {"width":320,"height":512};
const content = `<path class="sat7ci9ab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:lira-sign"} {...others} />);
}

export default Component;
