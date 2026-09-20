import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzk05gb5l.css';
import '../../css/d/d86a3vbmu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dzk05gb5l"/><path class="d86a3vbmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:connectwise-screenconnect"} {...others} />);
}

export default Component;
