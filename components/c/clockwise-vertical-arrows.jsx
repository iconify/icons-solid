import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aul8oe8-c.css';
import '../../css/u/uawzs83_s.css';
import '../../css/q/qj4npqwtq.css';
import '../../css/j/jn8qy4bru.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGWRURAe4x" class="aul8oe8-c"/><path id="SVGPpk4dxYa" class="uawzs83_s"/></defs><g class="qj4npqwtq"><use href="#SVGWRURAe4x"/><use href="#SVGPpk4dxYa"/></g><g class="jn8qy4bru"><use href="#SVGWRURAe4x"/><use href="#SVGPpk4dxYa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:clockwise-vertical-arrows"} {...others} />);
}

export default Component;
