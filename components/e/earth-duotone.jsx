import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xke_bo0dv.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/o/osg7x0btl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xke_bo0dv"/><path class="g4vvtk_cw"/><path class="osg7x0btl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:earth-duotone"} {...others} />);
}

export default Component;
