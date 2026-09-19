import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y592j3bqz.css';
import '../../css/e/e-nfirlbo.css';
import '../../css/a/a2iaob_cj.css';
import '../../css/n/n7d_jekvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y592j3bqz"/><path class="e-nfirlbo"/><path class="a2iaob_cj"/><path class="n7d_jekvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hand-sanitizer"} {...others} />);
}

export default Component;
