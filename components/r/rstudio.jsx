import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt50z_byh.css';
import '../../css/v/v1lzvlbpn.css';
import '../../css/h/h65up44bo.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="gt50z_byh"/><path class="v1lzvlbpn"/><path class="h65up44bo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:rstudio"} {...others} />);
}

export default Component;
