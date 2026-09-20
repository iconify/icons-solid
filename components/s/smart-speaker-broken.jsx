import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s48_-ubev.css';
import '../../css/k/k839w8bwb.css';
import '../../css/n/nk9jicc4w.css';
import '../../css/z/zi0v34izz.css';
import '../../css/m/m_y6rmbsd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s48_-ubev"/><path class="k839w8bwb"/><path class="nk9jicc4w"/><path class="zi0v34izz"/><path class="m_y6rmbsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-speaker-broken"} {...others} />);
}

export default Component;
