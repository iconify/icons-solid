import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypknmkbto.css';
import '../../css/g/g1k_hynjq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ypknmkbto"/><path class="g1k_hynjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:duckduckgo-light"} {...others} />);
}

export default Component;
