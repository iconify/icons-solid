import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ob63bsb4b.css';
import '../../css/g/gyh9vjbcd.css';
import '../../css/j/j1oc-9zje.css';
import '../../css/m/mc8oopf-h.css';
import '../../css/a/aq3garbob.css';
import '../../css/h/hzclj-6yk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ob63bsb4b"/><path class="gyh9vjbcd"/><path class="j1oc-9zje"/><path class="mc8oopf-h"/><path class="aq3garbob"/><path class="hzclj-6yk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-smartwatch-image"} {...others} />);
}

export default Component;
