import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exv3ojb0v.css';
import '../../css/s/sdocp_b4u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="exv3ojb0v"/><path class="sdocp_b4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:logo-vue"} {...others} />);
}

export default Component;
