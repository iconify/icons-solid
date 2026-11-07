import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzdv_ccir.css';
import '../../css/x/x9-rwuyde.css';

const viewBox = {"width":24,"height":24};
const content = `<ellipse class="zzdv_ccir"/><path class="x9-rwuyde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:golf-bold-duotone"} {...others} />);
}

export default Component;
