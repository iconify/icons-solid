import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qb1viybxl.css';
import '../../css/c/c768_cc3f.css';
import '../../css/s/srg_q5b8e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qb1viybxl"/><path class="c768_cc3f"/><path class="srg_q5b8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:eyeglasses-duo"} {...others} />);
}

export default Component;
