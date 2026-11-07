import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mytqe3brx.css';
import '../../css/q/q4cd927lm.css';
import '../../css/e/e3ailubbm.css';
import '../../css/g/g_c-r1l6i.css';
import '../../css/i/ijj9ljbbz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mytqe3brx"/><path class="q4cd927lm"/><path class="e3ailubbm"/><path class="g_c-r1l6i"/><path class="ijj9ljbbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-rotate-2-bold-duotone"} {...others} />);
}

export default Component;
