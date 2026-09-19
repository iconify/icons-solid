import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wr272q-zt.css';
import '../../css/m/mhc-hp51p.css';

const viewBox = {"width":128,"height":128};
const content = `<circle class="wr272q-zt"/><path class="mhc-hp51p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:chrome-wordmark"} {...others} />);
}

export default Component;
