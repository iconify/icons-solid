import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6bi1rard.css';
import '../../css/m/m5qdqtwec.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r6bi1rard"/><path class="m5qdqtwec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:oak-identity-dark"} {...others} />);
}

export default Component;
