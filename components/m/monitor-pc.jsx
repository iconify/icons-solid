import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c58q650vd.css';
import '../../css/o/ot_220b_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c58q650vd"/><path class="ot_220b_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:monitor-pc"} {...others} />);
}

export default Component;
