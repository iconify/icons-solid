import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dp0alqbmn.css';
import '../../css/g/g23q0vb_x.css';
import '../../css/v/va-4cdcei.css';
import '../../css/l/l-mhmtlzp.css';
import '../../css/m/mk951tb-r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="dp0alqbmn"/><path class="g23q0vb_x"/><path class="va-4cdcei"/><path class="l-mhmtlzp"/><path class="mk951tb-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:store-1"} {...others} />);
}

export default Component;
