import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kbz71jyrz.css';
import '../../css/w/w302-hd8l.css';
import '../../css/r/ri2oegbdi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kbz71jyrz"/><path class="w302-hd8l wm-a"/><path class="ri2oegbdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:receipt-text-duo"} {...others} />);
}

export default Component;
