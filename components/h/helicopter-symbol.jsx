import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dv0nxwb6v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dv0nxwb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:helicopter-symbol"} {...others} />);
}

export default Component;
