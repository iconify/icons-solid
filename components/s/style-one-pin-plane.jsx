import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dqjlqhb9e.css';
import '../../css/b/bjgbq_xpr.css';
import '../../css/l/l_re82bxc.css';
import '../../css/t/tvvetq0ue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dqjlqhb9e"/><path class="bjgbq_xpr"/><path class="l_re82bxc"/><path class="tvvetq0ue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:style-one-pin-plane"} {...others} />);
}

export default Component;
