import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/accicg2ns.css';
import '../../css/l/ldtpmn0ux.css';
import '../../css/l/l52qpcb9d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="accicg2ns"/><path class="ldtpmn0ux"/><path class="l52qpcb9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-onedrive-light"} {...others} />);
}

export default Component;
