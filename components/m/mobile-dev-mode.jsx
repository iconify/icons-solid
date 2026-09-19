import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/db-rwxb2n.css';
import '../../css/m/mcca7odma.css';
import '../../css/m/mc609bhih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="db-rwxb2n"/><path class="mcca7odma"/><path class="mc609bhih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:mobile-dev-mode"} {...others} />);
}

export default Component;
