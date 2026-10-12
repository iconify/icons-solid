import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rogglqbhr.css';
import '../../css/e/e3ahb7b0n.css';
import '../../css/k/k1hyvpwyk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rogglqbhr"/><rect transform="matrix(-1 0 0 1 14.9 2.76)" class="e3ahb7b0n"/><path class="k1hyvpwyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:table-columns-measure"} {...others} />);
}

export default Component;
