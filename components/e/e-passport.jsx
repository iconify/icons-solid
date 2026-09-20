import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gxn-lchhn.css';
import '../../css/o/ovl356bzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gxn-lchhn"/><path class="ovl356bzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:e-passport"} {...others} />);
}

export default Component;
