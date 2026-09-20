import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvq6ijb7t.css';
import '../../css/r/rzvwk-bwy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vvq6ijb7t"/><path class="rzvwk-bwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mirotalk-dark"} {...others} />);
}

export default Component;
