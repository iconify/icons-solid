import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sz-_5oksg.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/u/usozxnbrm.css';
import '../../css/y/y4f-t_i2z.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="sz-_5oksg"/><g class="ij2x_72vy"><circle class="usozxnbrm"/><path class="y4f-t_i2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:globe-with-meridians"} {...others} />);
}

export default Component;
