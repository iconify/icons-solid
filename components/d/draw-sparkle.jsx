import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t4ccy1u0g.css';
import '../../css/u/u7ufek3ss.css';
import '../../css/a/aghrgjb2h.css';
import '../../css/z/zmod0qb7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(135 7.228 7.675)scale(-1 1)" class="t4ccy1u0g"/><path class="u7ufek3ss"/><path class="aghrgjb2h"/><path class="zmod0qb7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:draw-sparkle"} {...others} />);
}

export default Component;
