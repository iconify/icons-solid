import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p66iqgmxl.css';
import '../../css/b/bgodtqbgw.css';
import '../../css/k/k2c16-bhf.css';
import '../../css/a/ag9av9b0k.css';
import '../../css/k/kxfq8vb8y.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="p66iqgmxl"/><path class="bgodtqbgw"/><path class="k2c16-bhf"/><path class="ag9av9b0k"/><path class="kxfq8vb8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:production-belt-time"} {...others} />);
}

export default Component;
