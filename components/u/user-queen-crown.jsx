import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/az4ee0kue.css';
import '../../css/w/w9_7t2eps.css';
import '../../css/l/lx5_ycc4h.css';
import '../../css/a/agx9ouuiz.css';
import '../../css/m/moph9ybrx.css';
import '../../css/q/qj9rtyb_i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="az4ee0kue"/><path class="w9_7t2eps"/><path class="lx5_ycc4h"/><path class="agx9ouuiz"/><path class="moph9ybrx"/><path class="qj9rtyb_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:user-queen-crown"} {...others} />);
}

export default Component;
