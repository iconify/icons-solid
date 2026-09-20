import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5l-z0bso.css';
import '../../css/u/udd3bbc2x.css';
import '../../css/j/jn8qy4bru.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGi60vdbXt" class="y5l-z0bso"/></defs><use href="#SVGi60vdbXt" class="udd3bbc2x"/><use href="#SVGi60vdbXt" class="jn8qy4bru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:liver"} {...others} />);
}

export default Component;
