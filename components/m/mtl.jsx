import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekgj4zbqv.css';
import '../../css/m/mfztm5v2n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="ekgj4zbqv"/><path class="mfztm5v2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:mtl"} {...others} />);
}

export default Component;
