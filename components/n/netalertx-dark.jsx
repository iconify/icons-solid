import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p67p4-ffp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p67p4-ffp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:netalertx-dark"} {...others} />);
}

export default Component;
