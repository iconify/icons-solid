import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-d14a6-i.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lbj5iacpc.css';
import '../../css/j/jaqjjdvqb.css';
import '../../css/d/d-l5n7bpd.css';
import '../../css/e/eo_76b8fd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-d14a6-i secondary"/><g class="dt0cm9dhy primary"><path class="lbj5iacpc"/><path class="jaqjjdvqb"/><path class="d-l5n7bpd"/><path class="eo_76b8fd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:printer-off-duo"} {...others} />);
}

export default Component;
