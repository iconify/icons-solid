import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xf4ca1btm.css';
import '../../css/r/r_wkqfbyw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xf4ca1btm"/><path class="r_wkqfbyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:body-shape-bold-duotone"} {...others} />);
}

export default Component;
