import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sibkcjb8c.css';
import '../../css/i/ii43a9b1h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sibkcjb8c"/><path class="ii43a9b1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-access-2000"} {...others} />);
}

export default Component;
