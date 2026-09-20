import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hkpeo1bug.css';
import '../../css/t/tb5ln68hg.css';
import '../../css/v/vx2joeb3w.css';
import '../../css/s/symdwxb-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hkpeo1bug"/><path class="tb5ln68hg"/><path class="vx2joeb3w"/><path class="symdwxb-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:truck-remove"} {...others} />);
}

export default Component;
