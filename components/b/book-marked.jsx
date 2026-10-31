import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eeu50zbik.css';
import '../../css/u/u9vxk4q8r.css';
import '../../css/c/c4a_-4b6a.css';
import '../../css/o/ou58-lsrx.css';
import '../../css/e/e-xgsvbwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eeu50zbik wm-k"/><path class="u9vxk4q8r wm-k"/><path class="c4a_-4b6a wm-k"/><path class="ou58-lsrx wm-shadow"/><path class="e-xgsvbwc wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:book-marked"} {...others} />);
}

export default Component;
