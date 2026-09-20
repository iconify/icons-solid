import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bvet31q4q.css';
import '../../css/v/v_3fbcb-v.css';
import '../../css/x/xztatfo0b.css';
import '../../css/c/cebv96buh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bvet31q4q"/><path class="v_3fbcb-v"/><path class="xztatfo0b"/><path class="cebv96buh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:milk-carton-1"} {...others} />);
}

export default Component;
