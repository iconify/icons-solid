import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1jmijbiu.css';
import '../../css/r/rhggxvbnq.css';
import '../../css/j/j8ife_b-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="n1jmijbiu"/><circle class="rhggxvbnq"/><path class="j8ife_b-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:reduce-motion"} {...others} />);
}

export default Component;
