import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cp0zevb-d.css';
import '../../css/z/z6le6hb_g.css';
import '../../css/p/ppau-_b-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cp0zevb-d"/><path class="z6le6hb_g"/><path class="ppau-_b-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:location-pin-3-flat"} {...others} />);
}

export default Component;
