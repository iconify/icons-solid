import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bssr3p4gm.css';
import '../../css/b/bn0slib0i.css';
import '../../css/s/spkxylb2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bssr3p4gm"/><path class="bn0slib0i"/><path class="spkxylb2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-rings-linear"} {...others} />);
}

export default Component;
