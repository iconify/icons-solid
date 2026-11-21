import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bf38tbc0j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bf38tbc0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adobe-dreamweaver-dark"} {...others} />);
}

export default Component;
