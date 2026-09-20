import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bov0584ws.css';
import '../../css/p/pcybz4e1f.css';
import '../../css/s/skc1clb-z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bov0584ws"/><path class="pcybz4e1f"/><path class="skc1clb-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fli-so"} {...others} />);
}

export default Component;
