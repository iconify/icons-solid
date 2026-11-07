import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wipgr75ah.css';
import '../../css/u/ujptxiz3v.css';
import '../../css/d/dykyzybzd.css';
import '../../css/r/rrkvivbbw.css';
import '../../css/p/psy6bjy8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wipgr75ah"/><path class="ujptxiz3v"/><path class="dykyzybzd"/><path class="rrkvivbbw"/><path class="psy6bjy8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flip-vertical-linear"} {...others} />);
}

export default Component;
