import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_ertjd9a.css';
import '../../css/a/a2s_u0b1p.css';
import '../../css/z/zeul4tb0e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l_ertjd9a"/><path class="a2s_u0b1p"/><path class="zeul4tb0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:resend-all"} {...others} />);
}

export default Component;
