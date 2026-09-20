import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q90dtkzdo.css';
import '../../css/u/uc85k4qnp.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/u/usozxnbrm.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGPrAKQe7C" class="q90dtkzdo"/></defs><circle class="uc85k4qnp"/><use href="#SVGPrAKQe7C"/><g class="kdz4acc8r"><circle class="usozxnbrm"/><use href="#SVGPrAKQe7C"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:regional-indicator-s"} {...others} />);
}

export default Component;
