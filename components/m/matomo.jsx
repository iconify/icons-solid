import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spf7r7h-h.css';
import '../../css/p/pqi-gtarw.css';
import '../../css/j/joab4p6un.css';
import '../../css/x/xiyy7obpd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="spf7r7h-h"/><circle class="pqi-gtarw"/><circle class="joab4p6un"/><path class="xiyy7obpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:matomo"} {...others} />);
}

export default Component;
