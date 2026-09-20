import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t98jbcwdn.css';
import '../../css/m/msqpicc3e.css';
import '../../css/b/bkyqy-baq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t98jbcwdn"/><path class="msqpicc3e"/><circle class="bkyqy-baq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:map-light"} {...others} />);
}

export default Component;
