import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpb399baj.css';
import '../../css/a/aewedm1sl.css';
import '../../css/k/k965lms2y.css';
import '../../css/m/mdoh_1bvl.css';
import '../../css/k/k0o2sdfps.css';
import '../../css/g/go297--4h.css';
import '../../css/v/vt13vobwa.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jpb399baj"/><circle class="aewedm1sl"/><circle class="k965lms2y"/><circle class="mdoh_1bvl"/><circle class="k0o2sdfps"/><circle class="go297--4h"/><path class="vt13vobwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:group-presentation"} {...others} />);
}

export default Component;
