import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsslpo9va.css';
import '../../css/e/eyxukz89o.css';
import '../../css/j/jvbt1jbxn.css';
import '../../css/v/vb_fymp5d.css';
import '../../css/s/s5jnqebkl.css';
import '../../css/g/guhvvcc8g.css';
import '../../css/u/u8kzmsbdq.css';
import '../../css/x/xnkbuobrc.css';
import '../../css/q/qu8juf99c.css';
import '../../css/e/ex-sqnz_s.css';
import '../../css/y/y2aoqjq9q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lsslpo9va"/><g class="eyxukz89o"><circle class="jvbt1jbxn"/><circle class="vb_fymp5d"/><circle class="s5jnqebkl"/><circle class="guhvvcc8g"/><circle class="u8kzmsbdq"/><circle class="xnkbuobrc"/><circle class="qu8juf99c"/><circle class="ex-sqnz_s"/><circle class="y2aoqjq9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:scatter-plot"} {...others} />);
}

export default Component;
