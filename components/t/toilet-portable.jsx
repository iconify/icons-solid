import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhvfa7b5d.css';

const viewBox = {"width":320,"height":512};
const content = `<path class="vhvfa7b5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:toilet-portable"} {...others} />);
}

export default Component;
