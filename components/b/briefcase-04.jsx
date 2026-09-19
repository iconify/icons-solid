import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dw5hulxel.css';
import '../../css/d/dbmwoub8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dw5hulxel"/><path class="dbmwoub8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:briefcase-04"} {...others} />);
}

export default Component;
