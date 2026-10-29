import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hecf8qbsp.css';
import '../../css/n/njx_e83nm.css';
import '../../css/a/a4kz_uh_y.css';
import '../../css/e/emf9sr69q.css';
import '../../css/k/kgv9gv80f.css';
import '../../css/z/zseix48wm.css';
import '../../css/f/fhfln9eee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hecf8qbsp wm-shadow"/><path class="njx_e83nm wm-shadow"/><path class="a4kz_uh_y"/><path class="emf9sr69q"/><path class="kgv9gv80f"/><path class="zseix48wm"/><path class="fhfln9eee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:building"} {...others} />);
}

export default Component;
