import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lu8n2uq5t.css';
import '../../css/k/kuf48lbbq.css';
import '../../css/v/v2c8ogbfr.css';
import '../../css/v/v3zukqwqr.css';
import '../../css/a/avv3qpdgn.css';
import '../../css/g/gsn16rx_z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lu8n2uq5t"/><path class="kuf48lbbq"/><path class="v2c8ogbfr"/><path class="v3zukqwqr"/><path class="avv3qpdgn"/><path class="gsn16rx_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rackpad-light"} {...others} />);
}

export default Component;
