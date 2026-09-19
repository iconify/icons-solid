import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cx17xhu1q.css';
import '../../css/j/jbmpve7zu.css';
import '../../css/g/gbugyfbig.css';
import '../../css/e/ebtwwp8cf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cx17xhu1q"/><path class="jbmpve7zu"/><path class="gbugyfbig"/><path class="ebtwwp8cf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:accessibility-tech"} {...others} />);
}

export default Component;
