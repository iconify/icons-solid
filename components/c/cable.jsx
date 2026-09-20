import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e4fgyobzl.css';
import '../../css/q/qte5fcb6h.css';
import '../../css/o/ooe5hubum.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e4fgyobzl"/><path class="qte5fcb6h"/><path class="ooe5hubum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cable"} {...others} />);
}

export default Component;
