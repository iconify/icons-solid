import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/es01b9v3e.css';
import '../../css/e/eqsgj0zkv.css';
import '../../css/m/mz31awbam.css';
import '../../css/p/pvx_7mjiy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="es01b9v3e"/><path class="eqsgj0zkv"/><path class="mz31awbam"/><path class="pvx_7mjiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:sofa"} {...others} />);
}

export default Component;
