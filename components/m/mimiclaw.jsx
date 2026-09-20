import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gd51t4b3t.css';
import '../../css/p/pruv_t01z.css';
import '../../css/h/hq9csmbih.css';
import '../../css/d/dul3e2wpv.css';
import '../../css/b/bdp-2jbwo.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="gd51t4b3t"><path class="pruv_t01z"/><path class="hq9csmbih"/><path class="dul3e2wpv"/><path class="bdp-2jbwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mimiclaw"} {...others} />);
}

export default Component;
