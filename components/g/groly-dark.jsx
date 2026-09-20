import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qb8q_2bvr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qb8q_2bvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:groly-dark"} {...others} />);
}

export default Component;
