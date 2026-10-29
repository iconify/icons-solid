import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cae64xtfz.css';
import '../../css/b/bcnwz-bql.css';
import '../../css/c/ctaobdbfw.css';
import '../../css/m/mqfx5dq5o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="cae64xtfz"/><path class="bcnwz-bql wm-a"/><path class="ctaobdbfw"/><path class="mqfx5dq5o wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:notebook-duo"} {...others} />);
}

export default Component;
