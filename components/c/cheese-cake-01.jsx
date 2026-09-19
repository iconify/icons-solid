import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eep0cg56r.css';
import '../../css/g/gm9yycbjl.css';
import '../../css/p/pqqc-y78h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="eep0cg56r"/><path class="gm9yycbjl"/><path class="pqqc-y78h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cheese-cake-01"} {...others} />);
}

export default Component;
