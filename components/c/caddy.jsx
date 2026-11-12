import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8tbmnbml.css';
import '../../css/k/k-c9kibht.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z8tbmnbml"/><path class="k-c9kibht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:caddy"} {...others} />);
}

export default Component;
