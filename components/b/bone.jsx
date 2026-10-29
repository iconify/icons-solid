import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r44ynabpj.css';
import '../../css/f/fgeqsih6h.css';
import '../../css/q/q1p36ezov.css';
import '../../css/z/ztoqjhb2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r44ynabpj wm-k"/><path class="fgeqsih6h wm-k"/><path class="q1p36ezov wm-k"/><path class="wm-shine ztoqjhb2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:bone"} {...others} />);
}

export default Component;
