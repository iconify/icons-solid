import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lg-4ik0ms.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lg-4ik0ms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gitsave-dark"} {...others} />);
}

export default Component;
