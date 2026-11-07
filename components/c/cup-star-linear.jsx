import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yhio252-o.css';
import '../../css/n/n30k0z4xd.css';
import '../../css/t/t7j-yfbxu.css';
import '../../css/c/cmuob-bfj.css';
import '../../css/e/ez__-jb1z.css';
import '../../css/t/tj46qnbna.css';
import '../../css/f/f52sbkbuz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yhio252-o"/><path class="n30k0z4xd"/><path class="t7j-yfbxu"/><path class="cmuob-bfj"/><path class="ez__-jb1z"/><path class="tj46qnbna"/><path class="f52sbkbuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-star-linear"} {...others} />);
}

export default Component;
