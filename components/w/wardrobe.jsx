import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnfzppszj.css';
import '../../css/a/ay-1d3bni.css';
import '../../css/x/x3lg0tbto.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cnfzppszj"/><path class="ay-1d3bni"/><path class="x3lg0tbto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:wardrobe"} {...others} />);
}

export default Component;
