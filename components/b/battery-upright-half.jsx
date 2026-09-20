import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5sryr58s.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="t5sryr58s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:battery-upright-half"} {...others} />);
}

export default Component;
