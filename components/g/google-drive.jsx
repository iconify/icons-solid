import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/gqhc6dbnb.css';
import '../../css/c/cdlz1acmp.css';
import '../../css/i/ivmb_cb_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path clip-rule="evenodd" class="gqhc6dbnb"/><path clip-rule="evenodd" class="cdlz1acmp"/><path class="ivmb_cb_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:google-drive"} {...others} />);
}

export default Component;
