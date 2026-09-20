import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7o3anbvb.css';
import '../../css/m/mgn5404zj.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="m7o3anbvb"/><path class="mgn5404zj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-dermatology"} {...others} />);
}

export default Component;
