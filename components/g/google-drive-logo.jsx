import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gelqdibbl.css';
import '../../css/u/uxlng-bnj.css';
import '../../css/i/ix0069z2l.css';
import '../../css/t/tngatgboo.css';
import '../../css/b/b0pucbbas.css';
import '../../css/k/ktlls7lxl.css';
import '../../css/n/nbo12d33y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gelqdibbl"/><path class="uxlng-bnj"/><path class="ix0069z2l"/><path class="tngatgboo"/><path class="b0pucbbas"/><path class="ktlls7lxl"/><path class="nbo12d33y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:google-drive-logo"} {...others} />);
}

export default Component;
