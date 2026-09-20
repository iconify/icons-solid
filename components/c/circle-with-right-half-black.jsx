import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uh2ph_5cm.css';
import '../../css/b/brj919_4l.css';
import '../../css/i/itoigib-k.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/d/dm8dtzb9t.css';
import '../../css/p/p6-p-0qyp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="uh2ph_5cm"/><path class="brj919_4l"/><path class="itoigib-k"/><g class="brzn_0bpr"><path class="dm8dtzb9t"/><path class="p6-p-0qyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:circle-with-right-half-black"} {...others} />);
}

export default Component;
