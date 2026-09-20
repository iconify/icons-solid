import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sk87m-89y.css';
import '../../css/j/j7rnv8btf.css';
import '../../css/j/j2g9_khgu.css';
import '../../css/x/x67e1hbsb.css';
import '../../css/i/i7hvyubva.css';
import '../../css/d/dq6gj35wm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sk87m-89y"/><path class="j7rnv8btf"/><path class="j2g9_khgu"/><path class="x67e1hbsb"/><path class="i7hvyubva"/><path class="dq6gj35wm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:edit-image-photo"} {...others} />);
}

export default Component;
