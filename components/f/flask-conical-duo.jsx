import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eju6u3peq.css';
import '../../css/n/n-07r-b5s.css';
import '../../css/z/zxdihacgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="eju6u3peq"/><path class="n-07r-b5s wm-a"/><path class="zxdihacgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flask-conical-duo"} {...others} />);
}

export default Component;
