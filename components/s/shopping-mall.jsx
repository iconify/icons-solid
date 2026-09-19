import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qr0htxfrd.css';
import '../../css/p/pq-3x51-i.css';
import '../../css/g/gs98bbbdv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qr0htxfrd"/><path class="pq-3x51-i"/><path class="gs98bbbdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:shopping-mall"} {...others} />);
}

export default Component;
