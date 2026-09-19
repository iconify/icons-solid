import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7s6tsbkb.css';
import '../../css/n/n-u2bhuwf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l7s6tsbkb"/><path class="n-u2bhuwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:minus-square-outline"} {...others} />);
}

export default Component;
