import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qesjik02s.css';
import '../../css/c/c5__zobli.css';
import '../../css/o/o1mzd_r6r.css';

const viewBox = {"width":666.667,"height":666.667};
const content = `<defs><clipPath id="SVGtqzMtbni" clipPathUnits="userSpaceOnUse"><path class="qesjik02s"/></clipPath></defs><g clip-path="url(#SVGtqzMtbni)" transform="matrix(1.33333 0 0 -1.33333 -133.333 800)"><path class="c5__zobli"/><path class="o1mzd_r6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:facebook"} {...others} />);
}

export default Component;
