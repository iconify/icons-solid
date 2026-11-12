import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/da8y-n0pu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="da8y-n0pu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hermes-agent-light"} {...others} />);
}

export default Component;
