import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b8ca6mhbh.css';
import '../../css/g/g6cu6lb6n.css';
import '../../css/t/tb7d2cbbv.css';
import '../../css/h/h1gwief9f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="b8ca6mhbh"/><rect class="g6cu6lb6n"/><rect class="tb7d2cbbv"/><rect class="h1gwief9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-dashboard-layout-3-app-application-dashboard-home-layout"} {...others} />);
}

export default Component;
