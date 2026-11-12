import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq6qj3b9f.css';
import '../../css/d/d_ic3kbus.css';
import '../../css/x/xv20pn3tn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wq6qj3b9f"/><path class="d_ic3kbus"/><path class="xv20pn3tn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:langfuse"} {...others} />);
}

export default Component;
