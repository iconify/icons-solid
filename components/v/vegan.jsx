import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9j2w3uqr.css';
import '../../css/l/l7lhfpbqa.css';
import '../../css/q/qkqa4ibdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i9j2w3uqr"/><path class="l7lhfpbqa"/><path class="qkqa4ibdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:vegan"} {...others} />);
}

export default Component;
