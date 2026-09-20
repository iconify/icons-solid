import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0h-p-b6g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n0h-p-b6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dumbdrop-dark"} {...others} />);
}

export default Component;
