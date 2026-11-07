import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nphcgbcmt.css';
import '../../css/y/ynsaqab9c.css';
import '../../css/u/uqaz4lb5b.css';
import '../../css/k/ktepy320u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nphcgbcmt"/><path class="ynsaqab9c"/><path class="uqaz4lb5b"/><path class="ktepy320u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:screencast-bold-duotone"} {...others} />);
}

export default Component;
