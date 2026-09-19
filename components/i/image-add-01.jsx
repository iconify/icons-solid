import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gu9yjm2km.css';
import '../../css/c/cck4mqb4k.css';
import '../../css/i/id47-_bev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gu9yjm2km"/><path class="cck4mqb4k"/><path class="id47-_bev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:image-add-01"} {...others} />);
}

export default Component;
