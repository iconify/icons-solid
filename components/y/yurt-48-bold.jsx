import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dg5nokhli.css';
import '../../css/z/z8uw8db4s.css';
import '../../css/t/t-ygsga4r.css';
import '../../css/m/mc2ksacjx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dg5nokhli"/><path class="z8uw8db4s"/><path class="t-ygsga4r"/><path class="mc2ksacjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:yurt-48-bold"} {...others} />);
}

export default Component;
