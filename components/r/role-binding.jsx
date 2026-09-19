import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzkun1bgf.css';
import '../../css/m/m5u32yv6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gzkun1bgf"/><path class="m5u32yv6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:role-binding"} {...others} />);
}

export default Component;
