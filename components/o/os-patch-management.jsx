import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sspvm51wt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sspvm51wt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:os-patch-management"} {...others} />);
}

export default Component;
