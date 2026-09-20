import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/din7kacmm.css';
import '../../css/o/ojbfnibyv.css';
import '../../css/j/jjw_gzn8g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="din7kacmm"/><path class="ojbfnibyv"/><path class="jjw_gzn8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-contacts-dark"} {...others} />);
}

export default Component;
