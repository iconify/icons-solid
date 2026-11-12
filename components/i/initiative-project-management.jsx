import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u01w8rbik.css';
import '../../css/m/m5ihdsbet.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u01w8rbik"/><path class="m5ihdsbet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:initiative-project-management"} {...others} />);
}

export default Component;
