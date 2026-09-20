import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5biwmbup.css';
import '../../css/k/k8g6v0u2f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q5biwmbup"/><path class="k8g6v0u2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:etherpad-light"} {...others} />);
}

export default Component;
