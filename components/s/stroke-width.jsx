import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/knzgp7h3e.css';
import '../../css/p/pcbw4wbhw.css';
import '../../css/f/f42dojeim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="knzgp7h3e"/><path class="pcbw4wbhw"/><path class="f42dojeim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stroke-width"} {...others} />);
}

export default Component;
