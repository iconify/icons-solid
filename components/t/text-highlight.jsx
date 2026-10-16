import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k--iorb9a.css';
import '../../css/r/rxic-lb0j.css';
import '../../css/f/f9dlssbfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k--iorb9a"/><rect transform="matrix(0 -1 -1 0 21.13 21.35)" class="rxic-lb0j"/><rect transform="matrix(0 -1 -1 0 21.13 21.35)" class="f9dlssbfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-highlight"} {...others} />);
}

export default Component;
