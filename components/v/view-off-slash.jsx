import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gh-4n77zw.css';
import '../../css/q/q216lkbrx.css';
import '../../css/e/efkc1gbdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gh-4n77zw"/><path class="q216lkbrx"/><path class="efkc1gbdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:view-off-slash"} {...others} />);
}

export default Component;
