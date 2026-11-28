import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l3f1u7b1b.css';
import '../../css/c/cq-m1fwut.css';
import '../../css/c/cfkicbk9n.css';
import '../../css/z/zp3kgxefn.css';
import '../../css/a/a8ofgxb6j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="l3f1u7b1b"/><path class="cq-m1fwut"/><path class="cfkicbk9n"/><path class="zp3kgxefn"/><path class="a8ofgxb6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:waveform"} {...others} />);
}

export default Component;
