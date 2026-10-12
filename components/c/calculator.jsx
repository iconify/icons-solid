import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdq_hub2b.css';
import '../../css/s/s0bgrme9m.css';
import '../../css/e/ek-5ple3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(-1 0 0 1 21.25 2.73)" class="tdq_hub2b"/><rect transform="matrix(-1 0 0 1 21.25 2.73)" class="s0bgrme9m"/><path class="ek-5ple3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:calculator"} {...others} />);
}

export default Component;
