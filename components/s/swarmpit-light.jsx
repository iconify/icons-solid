import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbt5dq_hr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sbt5dq_hr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:swarmpit-light"} {...others} />);
}

export default Component;
