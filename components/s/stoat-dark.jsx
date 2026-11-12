import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bl1k8xx3a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bl1k8xx3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:stoat-dark"} {...others} />);
}

export default Component;
