import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/prs0duycp.css';
import '../../css/g/gx1_alb1r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="prs0duycp"/><path class="gx1_alb1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lamp-wall-down"} {...others} />);
}

export default Component;
