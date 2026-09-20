import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m3d9b5bic.css';
import '../../css/t/tb5ln68hg.css';
import '../../css/v/vx2joeb3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m3d9b5bic"/><path class="tb5ln68hg"/><path class="vx2joeb3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:truck3"} {...others} />);
}

export default Component;
