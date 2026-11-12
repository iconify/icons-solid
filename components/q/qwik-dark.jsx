import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c60-6kb4c.css';
import '../../css/k/kqgg57b8n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c60-6kb4c"/><path class="kqgg57b8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:qwik-dark"} {...others} />);
}

export default Component;
