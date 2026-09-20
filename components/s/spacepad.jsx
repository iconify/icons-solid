import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psk9w-asf.css';
import '../../css/m/mqh2rrbti.css';
import '../../css/s/sb8cqvbau.css';
import '../../css/i/iypdzxlxq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="psk9w-asf"/><path class="mqh2rrbti"/><path class="sb8cqvbau"/><circle class="iypdzxlxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:spacepad"} {...others} />);
}

export default Component;
