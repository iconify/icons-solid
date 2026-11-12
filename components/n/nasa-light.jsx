import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtmawi7ic.css';
import '../../css/e/e558ozb4n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qtmawi7ic"/><path class="e558ozb4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nasa-light"} {...others} />);
}

export default Component;
