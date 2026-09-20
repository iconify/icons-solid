import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqasqsbwy.css';
import '../../css/n/nwmmz0b6r.css';
import '../../css/k/k3_a_wb4n.css';
import '../../css/w/w1eihik_j.css';
import '../../css/f/fhv54ibid.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="aqasqsbwy"/><path clip-rule="evenodd" class="nwmmz0b6r"/><path class="k3_a_wb4n"/><path class="w1eihik_j"/><path class="fhv54ibid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bill-2"} {...others} />);
}

export default Component;
