import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s8fne7byb.css';
import '../../css/q/q-lflxbar.css';
import '../../css/k/kxdyb15su.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="s8fne7byb"/><path class="q-lflxbar"/><path class="kxdyb15su"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:toy-brick"} {...others} />);
}

export default Component;
