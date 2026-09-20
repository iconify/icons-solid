import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgfplbbgp.css';
import '../../css/g/gsi1lc1zm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kgfplbbgp"/><path class="gsi1lc1zm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:edubuntu"} {...others} />);
}

export default Component;
