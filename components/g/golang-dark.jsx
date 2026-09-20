import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nn5ah_bwf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nn5ah_bwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:golang-dark"} {...others} />);
}

export default Component;
