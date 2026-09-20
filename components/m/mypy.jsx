import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/da5r0yb7o.css';
import '../../css/z/zht-abauy.css';
import '../../css/l/lmc5hyb-n.css';

const viewBox = {"width":92,"height":20};
const content = `<mask id="SVGP3ZRwbKN"><rect class="da5r0yb7o"/></mask><g mask="url(#SVGP3ZRwbKN)"><path class="zht-abauy"/><path class="lmc5hyb-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mypy"} {...others} />);
}

export default Component;
