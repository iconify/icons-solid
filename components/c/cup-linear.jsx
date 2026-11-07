import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yhio252-o.css';
import '../../css/t/tj46qnbna.css';
import '../../css/f/f52sbkbuz.css';
import '../../css/r/r2lhvq26x.css';
import '../../css/t/t7j-yfbxu.css';
import '../../css/e/ez__-jb1z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yhio252-o"/><path class="tj46qnbna"/><path class="f52sbkbuz"/><path class="r2lhvq26x"/><path class="t7j-yfbxu"/><path class="ez__-jb1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-linear"} {...others} />);
}

export default Component;
