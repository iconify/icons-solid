import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ar_qvpb7x.css';
import '../../css/d/dv69d-bmz.css';
import '../../css/a/a4u2qpzio.css';
import '../../css/k/kow065bvm.css';
import '../../css/n/n0jxcnbpb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ar_qvpb7x"/><path class="dv69d-bmz"/><path class="a4u2qpzio"/><path class="kow065bvm"/><path class="n0jxcnbpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:glitchtip"} {...others} />);
}

export default Component;
