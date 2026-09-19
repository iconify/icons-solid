import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/prlak3q7y.css';
import '../../css/t/tfpo6iiuq.css';
import '../../css/k/kji158beh.css';
import '../../css/z/zx25bnwxi.css';
import '../../css/h/hmuptcbta.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="prlak3q7y"/><path class="tfpo6iiuq"/><path class="kji158beh"/><path class="zx25bnwxi"/><path class="hmuptcbta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cloud-storage"} {...others} />);
}

export default Component;
