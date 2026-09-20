import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apmc5o1cw.css';
import '../../css/g/grf9bz7uq.css';
import '../../css/l/lb80qlbob.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGEvIS1dWq" class="apmc5o1cw"/></defs><use href="#SVGEvIS1dWq" class="grf9bz7uq"/><use href="#SVGEvIS1dWq" class="lb80qlbob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:antenna-bars"} {...others} />);
}

export default Component;
