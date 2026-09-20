import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_ahb8bdh.css';
import '../../css/j/jsgezyb9h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j_ahb8bdh"/><path class="jsgezyb9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fluffychat"} {...others} />);
}

export default Component;
