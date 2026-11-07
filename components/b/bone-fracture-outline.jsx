import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ml2evcczv.css';
import '../../css/z/zega6xona.css';
import '../../css/m/mrl9trbpy.css';
import '../../css/p/p9h7ktbpn.css';
import '../../css/w/w_zno4b0b.css';
import '../../css/z/zg9-y2bio.css';
import '../../css/a/a52y6rjat.css';
import '../../css/b/bygom62ph.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ml2evcczv"/><path class="zega6xona"/><path class="mrl9trbpy"/><path class="p9h7ktbpn"/><path class="w_zno4b0b"/><path class="zg9-y2bio"/><path class="a52y6rjat"/><path clip-rule="evenodd" class="bygom62ph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bone-fracture-outline"} {...others} />);
}

export default Component;
