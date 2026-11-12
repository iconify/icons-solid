import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzakf0b0i.css';
import '../../css/n/n4t564n_z.css';
import '../../css/o/oqux2148l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tzakf0b0i"/><path class="n4t564n_z"/><path class="oqux2148l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:domain-watchdog"} {...others} />);
}

export default Component;
