import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxeigen8q.css';
import '../../css/m/m8v2x6bra.css';
import '../../css/m/mqybf2b7x.css';
import '../../css/d/dn7q6_s2o.css';
import '../../css/t/tbn_iwbah.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hxeigen8q"/><path class="m8v2x6bra"/><path class="mqybf2b7x"/><path class="dn7q6_s2o"/><path class="tbn_iwbah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:american-football"} {...others} />);
}

export default Component;
