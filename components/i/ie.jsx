import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-cxivbkz.css';
import '../../css/u/und_hqb0h.css';
import '../../css/r/rnp29ibmf.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="y-cxivbkz"/><path class="und_hqb0h"/><path class="rnp29ibmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ie"} {...others} />);
}

export default Component;
