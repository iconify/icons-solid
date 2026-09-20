import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lpyr71bzg.css';
import '../../css/s/shu_ctb9u.css';
import '../../css/i/iqy4f3ajf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lpyr71bzg"/><path class="shu_ctb9u"/><path class="iqy4f3ajf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:speaker-broken"} {...others} />);
}

export default Component;
