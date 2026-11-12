import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/puvlzwowv.css';
import '../../css/k/k8ay144-h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="puvlzwowv"/><path class="k8ay144-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:reitti-light"} {...others} />);
}

export default Component;
