import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmi7xr5ec.css';
import '../../css/r/r63xavbvd.css';
import '../../css/b/bpn6pm9pz.css';
import '../../css/h/h1ql855rm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mmi7xr5ec"/><path class="r63xavbvd"/><path class="bpn6pm9pz"/><path class="h1ql855rm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lidbrainz-dark"} {...others} />);
}

export default Component;
