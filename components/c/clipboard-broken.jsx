import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rlxmudt8l.css';
import '../../css/q/qu0eyjbrg.css';
import '../../css/m/my5268blj.css';
import '../../css/z/zjfd1kaum.css';
import '../../css/r/r_va8z9vn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rlxmudt8l"/><path class="qu0eyjbrg"/><path class="my5268blj"/><path class="zjfd1kaum"/><path class="r_va8z9vn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-broken"} {...others} />);
}

export default Component;
