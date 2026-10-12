import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0i2a4bro.css';
import '../../css/u/um13_qi5h.css';
import '../../css/l/lvo_-ccou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.3 21.3)" class="a0i2a4bro"/><path class="um13_qi5h"/><rect transform="matrix(0 -1 -1 0 21.3 21.3)" class="lvo_-ccou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:terminal-square"} {...others} />);
}

export default Component;
