import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-1c5mb2p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t-1c5mb2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:peer-calls"} {...others} />);
}

export default Component;
