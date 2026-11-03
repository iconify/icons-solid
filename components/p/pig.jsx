import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uugee_ckg.css';
import '../../css/b/b7_eq70_a.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/c/cn8kflqeu.css';
import '../../css/e/eem25gbjx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="uugee_ckg"/><path class="b7_eq70_a"/><g class="ij2x_72vy"><path class="cn8kflqeu"/><path class="eem25gbjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pig"} {...others} />);
}

export default Component;
