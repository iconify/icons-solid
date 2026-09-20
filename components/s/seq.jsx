import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kouiwvecw.css';
import '../../css/k/kz4_g2b8b.css';
import '../../css/y/yz8hndo5g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kouiwvecw"/><path class="kz4_g2b8b"/><path class="yz8hndo5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:seq"} {...others} />);
}

export default Component;
