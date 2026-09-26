import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vo6pq_eni.css';
import '../../css/q/qe311mboy.css';
import '../../css/b/b7flqff0r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vo6pq_eni"/><path class="qe311mboy"/><path class="b7flqff0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-ordered-line-duotone"} {...others} />);
}

export default Component;
