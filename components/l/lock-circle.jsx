import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lh5-28bek.css';
import '../../css/b/bt9-2rbpz.css';
import '../../css/p/pi2xzdbqy.css';
import '../../css/o/ohm10wuwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lh5-28bek"/><circle transform="rotate(90 12 12)" class="bt9-2rbpz"/><rect class="pi2xzdbqy"/><path class="ohm10wuwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lock-circle"} {...others} />);
}

export default Component;
