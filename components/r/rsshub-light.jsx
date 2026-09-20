import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ne3bmkbmr.css';
import '../../css/j/jjdolp14t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ne3bmkbmr"/><path class="jjdolp14t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rsshub-light"} {...others} />);
}

export default Component;
