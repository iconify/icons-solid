import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjzczbv1j.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vlzpd6b9v.css';
import '../../css/h/hmdjgfb1e.css';
import '../../css/t/tbihvnblu.css';
import '../../css/w/w0oaldc-a.css';
import '../../css/u/u-w8q3b3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bjzczbv1j secondary"/><g class="dt0cm9dhy primary"><path class="vlzpd6b9v"/><path class="hmdjgfb1e"/><path class="tbihvnblu"/><path class="w0oaldc-a"/><path class="u-w8q3b3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:circle-dashed-minus-duo"} {...others} />);
}

export default Component;
