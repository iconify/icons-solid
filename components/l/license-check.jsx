import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cio8mhbpo.css';
import '../../css/k/kj51nbk4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cio8mhbpo"/><path class="kj51nbk4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:license-check"} {...others} />);
}

export default Component;
