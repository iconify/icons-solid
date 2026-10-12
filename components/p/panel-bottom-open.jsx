import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q7wcc782q.css';
import '../../css/k/kwjlcqbyz.css';
import '../../css/r/rbd5iccre.css';
import '../../css/r/r3mewl4tv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q7wcc782q"/><rect transform="rotate(90 21.23 14.65)" class="kwjlcqbyz"/><rect transform="rotate(90 21.23 2.74)" class="rbd5iccre"/><path class="r3mewl4tv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:panel-bottom-open"} {...others} />);
}

export default Component;
