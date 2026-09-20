import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8tbmnbml.css';
import '../../css/k/kpb0wubyn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z8tbmnbml"/><path class="kpb0wubyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:caddy"} {...others} />);
}

export default Component;
