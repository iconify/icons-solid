import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hceq6e3ar.css';
import '../../css/d/dh9p7jqrn.css';
import '../../css/h/hjyobvb_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hceq6e3ar"/><path class="dh9p7jqrn"/><path class="hjyobvb_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book"} {...others} />);
}

export default Component;
