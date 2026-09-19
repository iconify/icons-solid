import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/v/vgtv_oh1j.css';
import '../../css/o/o5w75mhcf.css';
import '../../css/f/fa9k3vpzp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="vgtv_oh1j"/><path class="o5w75mhcf"/><path class="fa9k3vpzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:terrace"} {...others} />);
}

export default Component;
