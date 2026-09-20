import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdhfqclbu.css';
import '../../css/r/rh-ehybjv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rdhfqclbu"/><path class="rh-ehybjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:markstack-dark"} {...others} />);
}

export default Component;
