import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h14emmvzq.css';
import '../../css/g/gepctrpsq.css';
import '../../css/c/cix91lbno.css';
import '../../css/h/hgh6cwwcv.css';
import '../../css/d/deryr5bon.css';
import '../../css/w/wmf6bfl_i.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><rect class="h14emmvzq"/><rect class="gepctrpsq"/><rect class="cix91lbno"/><rect class="hgh6cwwcv"/><rect class="deryr5bon"/><rect class="wmf6bfl_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:die-5"} {...others} />);
}

export default Component;
