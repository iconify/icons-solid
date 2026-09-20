import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncm1w2prn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ncm1w2prn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:flashpaper-light"} {...others} />);
}

export default Component;
