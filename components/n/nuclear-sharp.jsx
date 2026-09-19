import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7d-ndb_c.css';
import '../../css/i/if1j4p61s.css';
import '../../css/b/bqprax02h.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="q7d-ndb_c"/><path class="if1j4p61s"/><path class="bqprax02h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:nuclear-sharp"} {...others} />);
}

export default Component;
