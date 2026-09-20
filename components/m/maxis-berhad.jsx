import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwuvm3_ix.css';
import '../../css/b/b_vjub-jh.css';

const viewBox = {"width":1544,"height":1496};
const content = `<defs><clipPath id="SVGphCPse2K" clipPathUnits="userSpaceOnUse"><path class="jwuvm3_ix"/></clipPath></defs><g clip-path="url(#SVGphCPse2K)"><path class="b_vjub-jh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:maxis-berhad"} {...others} />);
}

export default Component;
