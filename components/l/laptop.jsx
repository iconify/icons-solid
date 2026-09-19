import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/ficxir45h.css';
import '../../css/m/mp_bmdbno.css';
import '../../css/e/eb16u3ipa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="ficxir45h"/><path class="mp_bmdbno"/><path class="eb16u3ipa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:laptop"} {...others} />);
}

export default Component;
