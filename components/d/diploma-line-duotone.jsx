import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wifewsb1l.css';
import '../../css/a/aw_85mb7u.css';
import '../../css/m/mwn-ncj6a.css';
import '../../css/h/h3xl994jw.css';
import '../../css/v/v3g6xoxym.css';
import '../../css/j/j6p0y4-0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wifewsb1l"/><path class="aw_85mb7u"/><path class="mwn-ncj6a"/><path class="h3xl994jw"/><circle class="v3g6xoxym"/><path class="j6p0y4-0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diploma-line-duotone"} {...others} />);
}

export default Component;
