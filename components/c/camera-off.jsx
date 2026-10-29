import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmsn97bpu.css';
import '../../css/e/eg7twmghe.css';
import '../../css/p/p_qtwib1e.css';
import '../../css/u/u803lmbik.css';
import '../../css/c/c1hfj9brg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tmsn97bpu wm-k"/><path class="eg7twmghe wm-k"/><path class="p_qtwib1e wm-a"/><path class="u803lmbik wm-s"/><path class="c1hfj9brg wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:camera-off"} {...others} />);
}

export default Component;
