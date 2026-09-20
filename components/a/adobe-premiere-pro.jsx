import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhaq2tbcu.css';
import '../../css/n/n1prgobsq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mhaq2tbcu"/><path class="n1prgobsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adobe-premiere-pro"} {...others} />);
}

export default Component;
