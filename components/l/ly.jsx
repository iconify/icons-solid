import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4vcs__ux.css';
import '../../css/o/o_kiupjve.css';
import '../../css/k/kz2f02byn.css';
import '../../css/z/zkx8fnb6t.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="f4vcs__ux"/><path class="o_kiupjve"/><path class="kz2f02byn"/><path class="zkx8fnb6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ly"} {...others} />);
}

export default Component;
