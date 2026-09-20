import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fbm9j5b4h.css';
import '../../css/n/n1_ykhn3f.css';
import '../../css/g/gims79b8a.css';
import '../../css/h/h3xl994jw.css';
import '../../css/v/v3g6xoxym.css';
import '../../css/j/j6p0y4-0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fbm9j5b4h"/><path class="n1_ykhn3f"/><path class="gims79b8a"/><path class="h3xl994jw"/><circle class="v3g6xoxym"/><path class="j6p0y4-0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diploma-broken"} {...others} />);
}

export default Component;
