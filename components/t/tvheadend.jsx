import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bd94q1l9h.css';
import '../../css/p/p1u6d8a7v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bd94q1l9h"/><path class="p1u6d8a7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tvheadend"} {...others} />);
}

export default Component;
