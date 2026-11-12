import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7d_9oypd.css';
import '../../css/l/luvx9bb7p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d7d_9oypd"/><path class="luvx9bb7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:domain-watchdog-dark"} {...others} />);
}

export default Component;
