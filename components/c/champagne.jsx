import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i7zjwvbfm.css';
import '../../css/p/poxluybvn.css';
import '../../css/b/bfh85bb6e.css';
import '../../css/j/j6tcvy3zz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i7zjwvbfm"/><path class="poxluybvn"/><path class="bfh85bb6e"/><path class="j6tcvy3zz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:champagne"} {...others} />);
}

export default Component;
