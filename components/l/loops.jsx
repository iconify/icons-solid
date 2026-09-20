import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcsnbtokg.css';
import '../../css/f/fffxy750p.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="dcsnbtokg"/><path class="fffxy750p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:loops"} {...others} />);
}

export default Component;
