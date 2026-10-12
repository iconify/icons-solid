import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tmr1a-b-n.css';
import '../../css/n/nj9l5co0l.css';
import '../../css/b/b3hz54bib.css';
import '../../css/g/geya0ibia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tmr1a-b-n"/><rect transform="matrix(0 -1 -1 0 21.23 9.35)" class="nj9l5co0l"/><rect transform="matrix(0 -1 -1 0 21.23 21.27)" class="b3hz54bib"/><path class="geya0ibia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:panel-top-open"} {...others} />);
}

export default Component;
