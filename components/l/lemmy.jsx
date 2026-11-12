import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfth_183n.css';
import '../../css/h/h4y9kdbyo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rfth_183n"/><path class="h4y9kdbyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lemmy"} {...others} />);
}

export default Component;
