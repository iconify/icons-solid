import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d62-ihjob.css';
import '../../css/l/l1et6yd0q.css';
import '../../css/z/zcvwxrbvo.css';
import '../../css/j/jgug-rbau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="d62-ihjob"/><path class="l1et6yd0q"/><path class="zcvwxrbvo"/><path class="jgug-rbau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:maps-global-01"} {...others} />);
}

export default Component;
