import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gury2hb9z.css';
import '../../css/e/eqwkp0boz.css';
import '../../css/h/hmvp54drn.css';
import '../../css/k/k1_962ipp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gury2hb9z"/><path class="eqwkp0boz"/><path class="hmvp54drn"/><path class="k1_962ipp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tag"} {...others} />);
}

export default Component;
