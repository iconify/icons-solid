import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yq4o_fgkp.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="yq4o_fgkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:arrows-left-right-to-line"} {...others} />);
}

export default Component;
