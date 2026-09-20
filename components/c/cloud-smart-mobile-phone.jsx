import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rl5rxsbtj.css';
import '../../css/b/b3_n2cc4e.css';
import '../../css/b/be69_jbpr.css';
import '../../css/l/llbha6klq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rl5rxsbtj"/><path class="b3_n2cc4e"/><path class="be69_jbpr"/><path class="llbha6klq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cloud-smart-mobile-phone"} {...others} />);
}

export default Component;
