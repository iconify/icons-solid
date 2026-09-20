import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rf_8ixbgf.css';
import '../../css/q/qi-5iib3f.css';
import '../../css/q/qpg1j2-ne.css';
import '../../css/d/d0extn7ce.css';
import '../../css/d/dl15vsbnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="rf_8ixbgf"><path class="qi-5iib3f"/><path class="qpg1j2-ne"/><path class="d0extn7ce"/><path class="dl15vsbnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:sanity"} {...others} />);
}

export default Component;
