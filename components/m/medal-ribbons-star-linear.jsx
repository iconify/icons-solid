import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vto_qpspa.css';
import '../../css/i/i6nrt8nnu.css';
import '../../css/p/p8kjf3qdz.css';
import '../../css/t/tvuqtkb4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vto_qpspa"/><path class="i6nrt8nnu"/><path class="p8kjf3qdz"/><path class="tvuqtkb4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-ribbons-star-linear"} {...others} />);
}

export default Component;
