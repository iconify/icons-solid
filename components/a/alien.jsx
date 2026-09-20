import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2eseab_l.css';
import '../../css/n/ncy81xx2g.css';
import '../../css/h/he1a_4bte.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/z/z8fn4_1bf.css';
import '../../css/m/m4p-srizu.css';
import '../../css/d/d7xaxnx8j.css';
import '../../css/t/t-zky5dck.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="s2eseab_l"/><path class="ncy81xx2g"/><path class="he1a_4bte"/><g class="brzn_0bpr"><path class="z8fn4_1bf"/><path class="m4p-srizu"/><path class="d7xaxnx8j"/><path class="t-zky5dck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:alien"} {...others} />);
}

export default Component;
