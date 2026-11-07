import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wipgr75ah.css';
import '../../css/u/ujptxiz3v.css';
import '../../css/t/tkq4zwbvg.css';
import '../../css/t/ti1egob9t.css';
import '../../css/w/wm3p8rb_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wipgr75ah"/><path class="ujptxiz3v"/><path class="tkq4zwbvg"/><path class="ti1egob9t"/><path class="wm3p8rb_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flip-vertical-line-duotone"} {...others} />);
}

export default Component;
