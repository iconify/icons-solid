import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sz3oe3bob.css';
import '../../css/v/vdt1c_7jd.css';
import '../../css/h/h-ln_pywc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sz3oe3bob"/><path class="vdt1c_7jd"/><path class="h-ln_pywc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:heart-balloon"} {...others} />);
}

export default Component;
