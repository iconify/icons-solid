import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t50nn_bmc.css';
import '../../css/x/xlucq3ixv.css';
import '../../css/s/soy__snau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t50nn_bmc"/><path class="xlucq3ixv"/><path class="soy__snau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:fish-bones"} {...others} />);
}

export default Component;
