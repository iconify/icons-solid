import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n7oe98ujl.css';
import '../../css/b/b_626lm5f.css';
import '../../css/j/jc1o0db0c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.21 12.09)" class="n7oe98ujl"/><rect transform="matrix(0 -1 -1 0 21.21 21.26)" class="b_626lm5f"/><path class="jc1o0db0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:panels-top-filled"} {...others} />);
}

export default Component;
