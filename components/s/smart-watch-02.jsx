import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fcwncf4qh.css';
import '../../css/a/awuta7b3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fcwncf4qh"/><path class="awuta7b3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:smart-watch-02"} {...others} />);
}

export default Component;
