import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n73j_hptb.css';
import '../../css/p/pkgwtlppi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n73j_hptb"/><path class="pkgwtlppi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:papermc-velocity"} {...others} />);
}

export default Component;
