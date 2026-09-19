import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm1c3abgl.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="xm1c3abgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:controlpanelalt"} {...others} />);
}

export default Component;
