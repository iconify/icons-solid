import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/m-gkls7fb.css';
import '../../css/x/x80s06bvh.css';
import '../../css/k/k1bgszu8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="m-gkls7fb"/><path class="x80s06bvh"/><path class="k1bgszu8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:map"} {...others} />);
}

export default Component;
