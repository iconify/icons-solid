import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j9xou-p3f.css';
import '../../css/x/x3hcu31em.css';
import '../../css/z/zcb8pub_i.css';
import '../../css/p/paaftfbeg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="j9xou-p3f"/><path class="x3hcu31em"/><path class="zcb8pub_i"/><path class="paaftfbeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:point-on-map-perspective-bold"} {...others} />);
}

export default Component;
