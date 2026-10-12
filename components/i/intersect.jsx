import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nynfcwllb.css';
import '../../css/l/lz9d_d32h.css';
import '../../css/y/y9omin-0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nynfcwllb"/><rect class="lz9d_d32h"/><rect class="y9omin-0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:intersect"} {...others} />);
}

export default Component;
