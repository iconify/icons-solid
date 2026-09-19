import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcosuhb5e.css';

const viewBox = {"width":320,"height":408};
const content = `<path class="dcosuhb5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:navigation"} {...others} />);
}

export default Component;
