import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qs8qhvbzx.css';
import '../../css/m/mueojzrmf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qs8qhvbzx"/><path class="mueojzrmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nforwardauth"} {...others} />);
}

export default Component;
