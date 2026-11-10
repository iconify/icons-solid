import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r66xwe8tl.css';
import '../../css/m/mxys-bb-k.css';
import '../../css/k/kq3-rqbib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r66xwe8tl"/><path class="mxys-bb-k"/><path class="kq3-rqbib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:flag-off"} {...others} />);
}

export default Component;
