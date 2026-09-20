import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acky41bit.css';
import '../../css/s/sfa1rc65h.css';
import '../../css/r/rt2xw8--p.css';
import '../../css/b/bo8_cj02q.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="acky41bit"/><path class="sfa1rc65h"/><path class="rt2xw8--p"/><path class="bo8_cj02q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:headscale"} {...others} />);
}

export default Component;
