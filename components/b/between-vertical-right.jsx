import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/se6467b8k.css';
import '../../css/t/tmemfqbeq.css';
import '../../css/w/woidvgdef.css';
import '../../css/k/krc2ezbuu.css';
import '../../css/e/eyk7hcchi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-90 2.65 10)" class="se6467b8k"/><rect transform="rotate(-90 2.65 21.26)" class="tmemfqbeq"/><rect transform="rotate(-90 2.65 10)" class="woidvgdef"/><rect transform="rotate(-90 2.65 21.26)" class="krc2ezbuu"/><path class="eyk7hcchi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:between-vertical-right"} {...others} />);
}

export default Component;
