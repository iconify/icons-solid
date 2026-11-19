import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eubq8_boh.css';
import '../../css/b/blnanb_bb.css';
import '../../css/u/u6hewzbzd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eubq8_boh"/><path class="blnanb_bb"/><path class="u6hewzbzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:aspect-ratio-3-2"} {...others} />);
}

export default Component;
