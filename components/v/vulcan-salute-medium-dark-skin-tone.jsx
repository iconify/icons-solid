import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/na30l5bxc.css';
import '../../css/l/l3-aitx1e.css';
import '../../css/j/jn8qy4bru.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGNbTQ0cpy" class="na30l5bxc"/></defs><path class="l3-aitx1e"/><g class="jn8qy4bru"><use href="#SVGNbTQ0cpy"/><use href="#SVGNbTQ0cpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:vulcan-salute-medium-dark-skin-tone"} {...others} />);
}

export default Component;
