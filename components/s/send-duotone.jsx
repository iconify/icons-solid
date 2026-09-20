import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7u_32bvh.css';
import '../../css/x/x39yvob4g.css';
import '../../css/l/l105bfj4y.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGr77DHd6N" class="e7u_32bvh"/></defs><use href="#SVGr77DHd6N" class="x39yvob4g"/><use href="#SVGr77DHd6N" class="x39yvob4g"/><path class="l105bfj4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:send-duotone"} {...others} />);
}

export default Component;
