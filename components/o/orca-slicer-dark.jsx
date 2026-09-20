import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blzm3ki0j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="blzm3ki0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:orca-slicer-dark"} {...others} />);
}

export default Component;
