import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x7gcx8l3c.css';
import '../../css/j/jm_j6lb0o.css';
import '../../css/g/ggloksbqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x7gcx8l3c"/><ellipse transform="rotate(-180 12 9.77)" class="jm_j6lb0o"/><path class="ggloksbqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:drum"} {...others} />);
}

export default Component;
