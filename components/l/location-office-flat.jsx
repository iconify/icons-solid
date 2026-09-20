import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w_og1mb5r.css';
import '../../css/l/l1eif_0yo.css';
import '../../css/m/mzs5_b4ab.css';
import '../../css/w/wayiifblg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w_og1mb5r"/><path class="l1eif_0yo"/><path clip-rule="evenodd" class="mzs5_b4ab"/><path clip-rule="evenodd" class="wayiifblg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:location-office-flat"} {...others} />);
}

export default Component;
