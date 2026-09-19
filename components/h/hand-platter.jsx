import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oh8kmobjf.css';
import '../../css/k/kxmnzabbx.css';
import '../../css/d/d-_z4m5uh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="oh8kmobjf"/><path class="kxmnzabbx"/><path class="d-_z4m5uh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hand-platter"} {...others} />);
}

export default Component;
