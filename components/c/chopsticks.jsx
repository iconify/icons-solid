import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ez_6ovbaq.css';
import '../../css/h/hrzob008l.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGaTGCleZN" class="ez_6ovbaq"/></defs><use href="#SVGaTGCleZN" class="hrzob008l"/><use href="#SVGaTGCleZN" class="ij2x_72vy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:chopsticks"} {...others} />);
}

export default Component;
