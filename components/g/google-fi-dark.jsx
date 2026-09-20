import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nq1hv3m9a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nq1hv3m9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-fi-dark"} {...others} />);
}

export default Component;
