import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v3g6xoxym.css';
import '../../css/h/h3xl994jw.css';
import '../../css/j/j6p0y4-0y.css';
import '../../css/b/bqm3nnn0i.css';
import '../../css/n/n1_ykhn3f.css';
import '../../css/d/d20-0wyrx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="v3g6xoxym"/><path class="h3xl994jw"/><path class="j6p0y4-0y"/><path class="bqm3nnn0i"/><path class="n1_ykhn3f"/><path class="d20-0wyrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diploma-linear"} {...others} />);
}

export default Component;
