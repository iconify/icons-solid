import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2_q7l7lm.css';
import '../../css/l/lmsh1d1cc.css';
import '../../css/o/oen_blbax.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o2_q7l7lm"/><path class="lmsh1d1cc"/><path class="oen_blbax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:domain-monitor-light"} {...others} />);
}

export default Component;
