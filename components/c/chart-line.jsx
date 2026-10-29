import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sr25z3bhd.css';
import '../../css/d/d5cn6-g7r.css';
import '../../css/g/g0_j010xc.css';
import '../../css/t/tok5ds4az.css';
import '../../css/t/tkz0t1bdz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sr25z3bhd wm-shadow"/><path class="d5cn6-g7r wm-k"/><path class="g0_j010xc wm-k"/><path class="tok5ds4az wm-a"/><path class="tkz0t1bdz wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:chart-line"} {...others} />);
}

export default Component;
