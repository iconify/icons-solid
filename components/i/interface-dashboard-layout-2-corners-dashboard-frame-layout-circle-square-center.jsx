import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/elsz9acix.css';
import '../../css/n/ntpd7fc4k.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="elsz9acix"/><circle class="ntpd7fc4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-dashboard-layout-2-corners-dashboard-frame-layout-circle-square-center"} {...others} />);
}

export default Component;
