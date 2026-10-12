import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1ud7pb-u.css';
import '../../css/f/f3524rbvi.css';
import '../../css/i/igufa3bwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l1ud7pb-u"/><rect transform="rotate(44.193 8.89 20.52)skewY(-.252)" class="f3524rbvi"/><path class="igufa3bwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pill"} {...others} />);
}

export default Component;
