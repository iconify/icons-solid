import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/laln8oblt.css';
import '../../css/x/xteoxsbph.css';
import '../../css/g/gx31rr5qz.css';
import '../../css/m/m_4rsw5yb.css';
import '../../css/w/wf9cdiyzs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="laln8oblt"/><path class="xteoxsbph"/><path class="gx31rr5qz"/><path class="m_4rsw5yb"/><path class="wf9cdiyzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pulley-48"} {...others} />);
}

export default Component;
