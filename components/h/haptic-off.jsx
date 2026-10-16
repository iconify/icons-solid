import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zb3-aidrn.css';
import '../../css/b/bra7wczhs.css';
import '../../css/n/n9s4hsdqa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-90 6.68 20.25)" class="zb3-aidrn"/><rect transform="rotate(-90 6.68 20.25)" class="bra7wczhs"/><path class="n9s4hsdqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:haptic-off"} {...others} />);
}

export default Component;
