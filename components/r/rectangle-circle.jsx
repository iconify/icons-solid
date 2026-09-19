import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ut3jwge_g.css';
import '../../css/u/un61p4w6l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="ut3jwge_g"/><path class="un61p4w6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:rectangle-circle"} {...others} />);
}

export default Component;
