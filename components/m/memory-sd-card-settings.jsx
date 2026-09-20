import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lg3q93bem.css';
import '../../css/y/y0808qx6x.css';
import '../../css/m/m34862bjd.css';
import '../../css/p/pj5163b2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lg3q93bem"/><path class="y0808qx6x"/><path class="m34862bjd"/><path class="pj5163b2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:memory-sd-card-settings"} {...others} />);
}

export default Component;
