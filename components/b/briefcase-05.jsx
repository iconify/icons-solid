import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/g7ffovugd.css';
import '../../css/h/hl_ui8b2z.css';
import '../../css/k/k763p5bdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="g7ffovugd"/><path class="hl_ui8b2z"/><path class="k763p5bdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:briefcase-05"} {...others} />);
}

export default Component;
