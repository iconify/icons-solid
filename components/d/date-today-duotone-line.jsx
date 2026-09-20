import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukm9jj2re.css';
import '../../css/w/ww921tq1d.css';
import '../../css/g/ga2yrzb2l.css';
import '../../css/r/r_u70yb1q.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGIwD8Vc3U"><g class="ukm9jj2re"><path class="ww921tq1d"/><rect class="ga2yrzb2l"/><path class="r_u70yb1q"/></g></mask></defs><path mask="url(#SVGIwD8Vc3U)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:date-today-duotone-line"} {...others} />);
}

export default Component;
