import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kljix3b2j.css';
import '../../css/g/gb6l_zk0s.css';
import '../../css/b/bbjq83b2n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kljix3b2j"/><path class="gb6l_zk0s"/><path class="bbjq83b2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mailpit"} {...others} />);
}

export default Component;
