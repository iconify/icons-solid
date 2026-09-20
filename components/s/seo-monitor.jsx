import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7o7o5b7l.css';
import '../../css/t/t6gh8ibmm.css';
import '../../css/s/sehm2dsik.css';
import '../../css/q/qu6l8ybxw.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="o7o7o5b7l"/><path clip-rule="evenodd" class="t6gh8ibmm"/><path class="sehm2dsik"/><path clip-rule="evenodd" class="qu6l8ybxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:seo-monitor"} {...others} />);
}

export default Component;
