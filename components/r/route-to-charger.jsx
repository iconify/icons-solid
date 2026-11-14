import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y6yyhbwot.css';
import '../../css/g/gdkakebdu.css';
import '../../css/o/o9qs78bqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="y6yyhbwot"/><path class="gdkakebdu"/><path class="o9qs78bqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:route-to-charger"} {...others} />);
}

export default Component;
