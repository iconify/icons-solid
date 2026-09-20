import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n57ixwbvq.css';
import '../../css/s/s1gyzwksf.css';
import '../../css/y/ycrm45b1o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n57ixwbvq"/><path class="s1gyzwksf"/><path class="ycrm45b1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:spider"} {...others} />);
}

export default Component;
