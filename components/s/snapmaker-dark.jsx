import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcm2r0bqw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dcm2r0bqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:snapmaker-dark"} {...others} />);
}

export default Component;
