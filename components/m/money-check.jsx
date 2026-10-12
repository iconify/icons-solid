import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i3wrc0bgq.css';
import '../../css/d/drd2qvbta.css';
import '../../css/r/r3su53b9v.css';
import '../../css/m/mur8xvbmw.css';
import '../../css/b/bn4-50b1z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i3wrc0bgq"/><path class="drd2qvbta"/><path class="r3su53b9v"/><circle class="mur8xvbmw"/><path class="bn4-50b1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:money-check"} {...others} />);
}

export default Component;
