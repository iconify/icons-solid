import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ng0t87pbr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ng0t87pbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:netlock-rmm-dark"} {...others} />);
}

export default Component;
