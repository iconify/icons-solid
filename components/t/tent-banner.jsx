import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nt4wcrb_f.css';
import '../../css/v/v4dpeibvd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="nt4wcrb_f"/><path class="v4dpeibvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tent-banner"} {...others} />);
}

export default Component;
