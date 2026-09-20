import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlrehucqb.css';
import '../../css/t/tuhut9kiz.css';
import '../../css/j/j391hb87n.css';
import '../../css/r/rj86qhb3n.css';
import '../../css/n/ny9wol8yz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vlrehucqb"/><path class="tuhut9kiz"/><path class="j391hb87n"/><path class="rj86qhb3n"/><path class="ny9wol8yz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:almalinux"} {...others} />);
}

export default Component;
