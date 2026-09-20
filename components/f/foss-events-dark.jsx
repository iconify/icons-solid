import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qv9ej7bvr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qv9ej7bvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:foss-events-dark"} {...others} />);
}

export default Component;
