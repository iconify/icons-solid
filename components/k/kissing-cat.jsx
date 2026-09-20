import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9i8f50fi.css';
import '../../css/b/btdwznbdt.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/m/mbnqul_uo.css';
import '../../css/g/g55uyl9fg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c9i8f50fi"/><path class="btdwznbdt"/><g class="ij2x_72vy"><path class="mbnqul_uo"/><path class="g55uyl9fg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:kissing-cat"} {...others} />);
}

export default Component;
