import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zcj0y2b2p.css';
import '../../css/h/h6liou0dc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zcj0y2b2p"/><path class="h6liou0dc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mastodon"} {...others} />);
}

export default Component;
