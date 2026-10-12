import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5ka5taof.css';
import '../../css/e/euew-kxvf.css';
import '../../css/p/pdut19b3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u5ka5taof"/><path class="euew-kxvf"/><path class="pdut19b3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ear"} {...others} />);
}

export default Component;
