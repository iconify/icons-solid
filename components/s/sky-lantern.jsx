import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hjxju6mct.css';
import '../../css/h/hr_fn_bfr.css';
import '../../css/p/p0gu5dbyc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hjxju6mct"/><path class="hr_fn_bfr"/><path class="p0gu5dbyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:sky-lantern"} {...others} />);
}

export default Component;
