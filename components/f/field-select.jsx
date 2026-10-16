import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4httfblf.css';
import '../../css/m/mnrlhbcnt.css';
import '../../css/v/vukzssbyy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.73 18.5)" class="l4httfblf"/><path class="mnrlhbcnt"/><rect transform="matrix(0 -1 -1 0 21.73 18.5)" class="vukzssbyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:field-select"} {...others} />);
}

export default Component;
