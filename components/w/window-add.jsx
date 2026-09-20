import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w5bq_bbzq.css';
import '../../css/g/ge7v_ub0y.css';
import '../../css/h/h32jkxbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w5bq_bbzq"/><path class="ge7v_ub0y"/><path clip-rule="evenodd" class="h32jkxbzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:window-add"} {...others} />);
}

export default Component;
