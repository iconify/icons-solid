import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/accicg2ns.css';
import '../../css/w/wicut5btr.css';
import '../../css/l/le8lm-bsi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="accicg2ns"/><path class="wicut5btr"/><path class="le8lm-bsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-onedrive-light"} {...others} />);
}

export default Component;
