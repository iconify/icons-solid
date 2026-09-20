import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2w3kw90h.css';
import '../../css/x/xxonbvbnd.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/v/vldzwb61k.css';
import '../../css/u/uj_cakbpx.css';
import '../../css/z/zs1hzja9h.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="a2w3kw90h"/><path class="xxonbvbnd"/><g class="ij2x_72vy"><path class="vldzwb61k"/><path class="uj_cakbpx"/><path class="zs1hzja9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:notebook"} {...others} />);
}

export default Component;
