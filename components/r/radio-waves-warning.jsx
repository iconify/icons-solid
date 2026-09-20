import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjc_8vffs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kjc_8vffs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:radio-waves-warning"} {...others} />);
}

export default Component;
