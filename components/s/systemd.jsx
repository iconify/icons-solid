import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqod05bbx.css';
import '../../css/l/lo6iqdbgl.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="qqod05bbx"/><path class="lo6iqdbgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:systemd"} {...others} />);
}

export default Component;
