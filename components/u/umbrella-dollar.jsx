import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qwntkab6t.css';
import '../../css/i/in9uiwghv.css';
import '../../css/t/tfmz6fzjb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qwntkab6t"/><path class="in9uiwghv"/><path class="tfmz6fzjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:umbrella-dollar"} {...others} />);
}

export default Component;
