import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv3exrj3y.css';
import '../../css/i/it-d8emgh.css';
import '../../css/l/leiding1q.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/u/ujvr0vbtv.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="sv3exrj3y"><path class="it-d8emgh"/><circle class="leiding1q"/></g><g class="x8poo_bjf"><circle class="leiding1q"/><path class="ujvr0vbtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:heart-exclamation"} {...others} />);
}

export default Component;
