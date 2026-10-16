import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d776ktq9r.css';
import '../../css/m/m4t5wlb6j.css';
import '../../css/c/c57e_irzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d776ktq9r"/><circle transform="rotate(90 11.97 12.3)" class="m4t5wlb6j"/><path class="c57e_irzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sun-fog"} {...others} />);
}

export default Component;
